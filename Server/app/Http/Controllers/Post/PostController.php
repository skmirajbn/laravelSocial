<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Image;
use App\Models\Post;
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
        $perPage = 2;
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
        return response()->json([
            'message' => 'Post Created',
            'data' => $newPost
        ]);


    }
}