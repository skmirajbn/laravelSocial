<?php

namespace App\Http\Controllers\FriendRequest;

use App\Http\Controllers\Controller;
use App\Models\FriendRequest;
use App\Models\ProfileImage;
use App\Models\User;
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
            'friend_request_status' => 0
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
    function accept(Request $request) {
        $user = auth()->user();
        $toUserId = $user['user_id'];
        $fromUserId = $request->from_user_id;
        FriendRequest::where('from_user_id', $fromUserId)->where('to_user_id', $toUserId)->update(['friend_request_status' => 1]);

        $updatedFriendRequest = FriendRequest::where('from_user_id', $fromUserId)
            ->where('to_user_id', $toUserId)
            ->first();

        return response()->json([
            'message' => 'Friend Request Accepted Sucessfully',
            'data' => $updatedFriendRequest
        ]);
    }

    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];

        $friendReqeusts = FriendRequest::where('to_user_id', $userId)->orderBy('friend_request_status', 'asc')->get();
        if (!$friendReqeusts) {
            return response()->json([
                'message' => 'Not Found'
            ]);
        }
        $friendReqeusts->each(function ($friendRequest) {
            $fromUserId = $friendRequest->from_user_id;
            $fromUser = User::find($fromUserId);
            $profileImages = ProfileImage::where('user_id', $fromUserId);
            $profileImage = $profileImages->where('status', 1)->first();

            $fromUser->profile_image = $profileImage;
            $friendRequest->from_user = $fromUser;
        });
        return response()->json($friendReqeusts);

    }
}