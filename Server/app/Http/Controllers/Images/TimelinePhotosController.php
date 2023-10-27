<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\ProfileImage;
use App\Models\User;

class TimelinePhotosController extends Controller {
    function getAllPhotos() {
        $userId = auth()->user()->user_id;
        $profilePhotos = ProfileImage::where("user_id", $userId)->get();
        $timeLinePhotos = User::where('user_id', $userId)->with('images')->first()->images;
        $coverImages = User::where('user_id', $userId)->with('coverImages')->first()->coverImages;
        return response()->json([
            'profile_photos' => $profilePhotos,
            'timeline_photos' => $timeLinePhotos,
            'cover_images' => $coverImages,
        ]);

    }
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