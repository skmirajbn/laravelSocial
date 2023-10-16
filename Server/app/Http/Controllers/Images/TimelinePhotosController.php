<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\User;

class TimelinePhotosController extends Controller {
    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];
        $posts = User::find($userId)->posts()->get();

        $posts->each(function ($post) {
            $postId = $post->post_id;
            $images = Image::where('post_id', $postId)->get();
            $post->images = $images;
        });


        // $images = Image::select('*')->get();
        return response()->json($posts);
    }
}