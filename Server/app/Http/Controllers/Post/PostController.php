<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller {
    function get() {
    }
    function put(Request $request) {
        $postId = $request->input('post_id');
        $postTitle = $request->input('post_title');
        $postBody = $request->input('post_body');
        $userId = $request->input('user_id');
        $createPost = Post::create([
            'post_id' => $postId,
            'post_title' => $postTitle,
            'post_body' => $postBody,
            'user_id' => $userId,
        ]);
        if ($createPost) {
            return response()->json([
                'message' => 'post Created'
            ]);
        } else {
            return response()->json([
                'message' => 'post Creation failed'
            ]);
        }

    }
}