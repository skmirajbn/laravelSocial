<?php

namespace App\Http\Controllers\FriendRequest;

use App\Http\Controllers\Controller;
use App\Models\FriendRequest;
use Illuminate\Http\Request;

class FriendRequestController extends Controller {
    function post(Request $request) {
        $user = auth()->user();
        $fromUserId = $user['user_id'];
        $selfUserId = $request->self_user_id;
        FriendRequest::create([
            'self_user_id' => $selfUserId,
            'from_user_id' => $fromUserId,
            'friend_request_status' => 1
        ]);

    }
}