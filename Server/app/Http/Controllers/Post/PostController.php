<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller {
    function get() {
    }
    function post(Request $request) {
        $user = auth()->user();
        $postTitle = $request->post_title;
        $postBody = $request->post_body;
        $userId = $user['user_id'];


    }
}