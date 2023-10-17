<?php

namespace App\Http\Controllers\FriendRequest;

use App\Http\Controllers\Controller;
use App\Models\FriendRequest;
use Illuminate\Http\Request;

class FriendRequestController extends Controller {
    function post(Request $request) {
        $user = auth()->user();
        $fromUserId = $user['user_id'];
        $toUserId = $request->to_user_id;

        if (FriendRequest::existsFriendRequest($fromUserId, $toUserId)) {
            return response()->json(['message' => 'Friend request already exists.'], 400);
        }
        $createdRequest = FriendRequest::create([
            'to_user_id' => $toUserId,
            'from_user_id' => $fromUserId,
            'friend_request_status' => 1
        ]);
        if (!$createdRequest) {
            return response()->json([
                'message' => 'Friend Request Failed',
            ]);
        }
        return response()->json([
            'message' => 'Frined Request sent Sucessfully',
            'data' => $createdRequest
        ]);

    }

    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];

        $friendReqeust = FriendRequest::where('to_user_id', $userId)->get();
        if (!$friendReqeust) {
            return response()->json([
                'message' => 'Not Found'
            ]);
        }
        return response()->json($friendReqeust);

    }
}