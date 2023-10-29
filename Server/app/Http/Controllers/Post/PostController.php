<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\FriendRequest;
use App\Models\Image;
use App\Models\Post;
use App\Models\PostLike;
use App\Models\ProfileImage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class PostController extends Controller {
    function get() {
        $users = auth()->user();
        $userId = $users['user_id'];
        $user = User::find($userId);

        if (!$user) {
            return response()->json([
                'message' => 'User not Found'
            ]);
        }
        $perPage = 3;
        $userPosts = $user->posts()->with('images', 'user')->orderBy('created_at', 'desc')->paginate($perPage);

        $userImages = $user->profileImage()->where('status', 1)->first();
        $userPosts->each(function ($post) use ($userImages) {
            $post->user->profile_image = $userImages;
        });
        $userPosts->each(function ($post) {
            $postId = $post->post_id;
            $postComments = Comment::where('post_id', $postId)->orderBy('created_at', 'asc')->get();

            $postComments->each(function ($comment) {
                $comment->user = User::find($comment->user_id);
                $comment->user->profile_image = $comment->user->profileImage()->where('status', 1)->first();
            });
            $post->comments = $postComments;
        });
        return response()->json($userPosts);
    }
    function userPosts($username) {
        $user = User::where('user_username', $username)->first();

        if (!$user) {
            return response()->json([
                'message' => 'User not Found'
            ]);
        }
        $perPage = 3;
        $userPosts = $user->posts()->with('images', 'user')->orderBy('created_at', 'desc')->paginate($perPage);

        $userImages = $user->profileImage()->where('status', 1)->first();
        $userPosts->each(function ($post) use ($userImages) {
            $post->user->profile_image = $userImages;
        });
        $userPosts->each(function ($post) {
            $postId = $post->post_id;
            $postComments = Comment::where('post_id', $postId)->orderBy('created_at', 'asc')->get();

            $postComments->each(function ($comment) {
                $comment->user = User::find($comment->user_id);
                $comment->user->profile_image = $comment->user->profileImage()->where('status', 1)->first();
            });
            $post->comments = $postComments;
        });
        return response()->json($userPosts);
    }
    function homePosts() {
        $user = auth()->user();
        $userId = $user['user_id'];

        // Retrieve the friend IDs, including the user's ID
        $friendRequests = FriendRequest::where('friend_request_status', 1)
            ->where(function ($query) use ($userId) {
                $query->where('to_user_id', $userId)
                    ->orWhere('from_user_id', $userId);
            })->get();

        $friendIds = $friendRequests->pluck('to_user_id')->merge($friendRequests->pluck('from_user_id'))->push($userId);

        $friends = User::whereIn('user_id', $friendIds)->get();

        // Retrieve the posts from the friend IDs
        $friendPosts = Post::whereIn('user_id', $friendIds)->orderBy('created_at', 'desc')
            ->with(['user', 'images', 'comments.user'])
            ->paginate(3);

        $friendPosts->each(function ($post) {
            $comments = $post->comments;
            $comments->each(function ($comment) {
                $userId = $comment->user_id;
                $user = $comment->user;
                $user->profile_image = ProfileImage::where('user_id', $userId)->where('status', 1)->first();
                $comment->user = $user;
            });
        });


        // Retrieve the active profile image for each user
        $friendPosts->getCollection()->transform(function ($item) {
            $item->user->profile_image = ProfileImage::where('user_id', $item->user->user_id)->where('status', 1)->first();
            return $item;
        });
        return response()->json($friendPosts);
    }
    function post(Request $request) {
        $user = auth()->user();
        $postTitle = $request->post_title ?? '';
        $postBody = $request->post_body ?? '';
        $userId = $user['user_id'];
        $postCode = Str::uuid();

        $data = [
            'post_code' => $postCode,
            'post_title' => $postTitle,
            'post_body' => $postBody,
            'user_id' => $userId,
        ];
        $post = Post::create($data);
        $postId = $post->post_id;

        if (!$post) {
            return response()->json([
                'message' => 'Post Creation Failed',
            ]);
        }

        // Handling Image Insertion
        if ($request->hasFile('images')) {
            $images = $request->file('images');

            foreach ($images as $image) {
                $imageObject = ImageManagerStatic::make($image);
                $imageObject->fit(640, 480);
                $imageObject->encode('jpg', 60);
                $generatedImageName = Str::uuid() . '.jpg';
                $imagePath = 'public/images/' . $generatedImageName;
                // $imageObject->compress();

                Storage::put($imagePath, $imageObject->stream());

                // $imageObject->save(storage_path('app/public/images/' . Str::uuid() . '.jpg'));
                $generatedImageData = Image::create([
                    'post_id' => $postId,
                    'image_path' => 'storage/images/' . $generatedImageName
                ]);
            }


        }
        $newPost = Post::with('images')->find($postId);
        // Adding Additional Information to the created Post
        $postId = $newPost->post_id;
        $postComments = Comment::where('post_id', $postId)->orderBy('created_at', 'asc')->get();

        $postComments->each(function ($comment) {
            $comment->user = User::find($comment->user_id);
            $comment->user->profile_image = $comment->user->profileImage()->where('status', 1)->first();
        });
        $newPost->comments = $postComments;
        $userId = $newPost->user_id;


        $user = User::Where('user_id', $userId)->first();
        $profileImage = $user->profileImage()->where('status', 1)->first();
        $user->profile_image = $profileImage;
        $newPost->user = $user;

        return response()->json([
            'message' => 'Post Created',
            'data' => $newPost
        ]);
    }

    function like(Request $request, $postId, $likeType) {
        //likeType value must be of range 1-6 
        if ($likeType < 1 || $likeType > 6) {
            return response()->json([
                'message' => 'Invalid Like Type'
            ]);
        }

        // recevie the data from the url
        $userId = auth()->user()->user_id;
        //check if already have like of this user of same like type
        $like = PostLike::where('post_id', $postId)->where('user_id', $userId)->first();
        if ($like) {
            if ($like->post_like_type_id == $likeType) {
                $like->delete();
                return response()->json([
                    'message' => 'Post Unliked',
                ]);
            } else {
                $like->post_like_type_id = $likeType;
                $like->save();
                return response()->json([
                    'message' => 'Like Type Changed',
                ]);
            }
        }
        // create like
        $like = PostLike::create([
            'post_id' => $postId,
            'user_id' => $userId,
            'post_like_type_id' => $likeType,
        ]);
        if ($like) {
            return response()->json([
                'message' => 'Post Liked',
                'data' => $like
            ]);
        }
    }
}