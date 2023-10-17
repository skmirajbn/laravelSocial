<?php

namespace App\Http\Controllers\DiscoverPeople;

use App\Http\Controllers\Controller;
use App\Models\FriendRequest;
use App\Models\ProfileImage;
use App\Models\User;

class DiscoverPeopleController extends Controller {
    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];
        $discoveredPeople = User::where('user_id', '!=', $userId)->get();

        $discoveredPeople->each(function ($people) use ($userId) {
            $id = $people->user_id;
            $profileImage = ProfileImage::where('user_id', $id)->where('status', 1)->first();
            $people->profile_image = $profileImage;

            $friendReqeusts = FriendRequest::where('from_user_id', $userId)->where('to_user_id', $id)->first();
            if ($friendReqeusts) {
                $people->is_friend_request_sent = true;
            } else {
                $people->is_friend_request_sent = false;
            }
        });


        return response()->json($discoveredPeople);
    }
}