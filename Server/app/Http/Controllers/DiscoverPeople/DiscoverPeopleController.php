<?php

namespace App\Http\Controllers\DiscoverPeople;

use App\Http\Controllers\Controller;
use App\Models\ProfileImage;
use App\Models\User;

class DiscoverPeopleController extends Controller {
    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];
        $discoveredPeople = User::where('user_id', '!=', $userId)->get();

        $discoveredPeople->each(function ($people) {
            $id = $people->user_id;
            $profileImage = ProfileImage::where('user_id', $id)->where('status', 1)->first();
            $people->profile_image = $profileImage;
        });

        return response()->json($discoveredPeople);
    }
}