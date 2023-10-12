<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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

        if ($post) {
            return response()->json([
                'message' => 'post created',
                'data' => $data
            ]);
        } else {
            return response()->json([
                'message' => 'post creating Failed',
                'data' => null
            ]);
        }

        // Handling Image Insertion
        if ($request->hasFile('images')) {
            $images = $request->file('image');

            foreach ($images as $image) {
                $imageName = Str::uuid() . $image->getClientOriginalExtension();

                $filePath = Storage::disk('public')->storeAs('images', $image, $imageName);
            }


        }




    }
}