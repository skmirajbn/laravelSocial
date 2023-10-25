<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use App\Models\User;

class SearchFriendController extends Controller {
    function search($keywords) {
        $user = auth()->user();
        $userId = $user->user_id;
        $friends = User::getFriends($userId);
        $filteredFriends = $friends->filter(function ($friend) use ($keywords) {
            $lowerKeywords = strtolower($keywords);
            $lowerFirstName = strtolower($friend->user_first_name);
            $lowerLastName = strtolower($friend->user_last_name);
            $lowerEmail = strtolower($friend->email);

            return strpos($lowerFirstName, $lowerKeywords) !== false ||
                strpos($lowerLastName, $lowerKeywords) !== false ||
                strpos($lowerEmail, $lowerKeywords) !== false;
        });

        // Re-index the array to maintain the original order
        $resultUsers = array_values($filteredFriends->take(3)->all());

        return response()->json($resultUsers);
    }
    function all() {
        $user = auth()->user();
        $userId = $user->user_id;
        $friends = User::getFriends($userId)->take(3);
        return response()->json($friends);
    }

}
