<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class PostController extends Controller {
    function get() {
    }
    function post(Request $request) {
        $user = auth()->user();
        $postTitle = $request->post_title;
        $postBody = $request->post_body;
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
                // $imageObject->compress();

                $imageObject->save(storage_path('app/public/images/' . Str::uuid() . '.jpg'));
                $generatedImageName = $imageObject->basename;
                $generatedImageData = Image::create([
                    'post_id' => $postId,
                    'image_path' => 'storage/images/' . $generatedImageName
                ]);

                // $imagePath = $image->store('public/images');
                // if ($imagePath) {
                //     $insertImageData = Image::create([
                //         'post_id' => $postId,
                //         'image_path' => $imagePath
                //     ]);

                //     if (!$insertImageData) {
                //         return response()->json([
                //             'message' => 'image Upload Failed'
                //         ]);
                //     }
                // }
            }


        }
        return response()->json([
            'message' => 'Post Created'
        ]);


    }
}