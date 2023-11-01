<?php

namespace App\Http\Controllers\UserProfile;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Http\Request;

class UserProfileController extends Controller {
    public function get(Request $request) {
        $userId = auth()->user()->user_id;
        $friendIds = User::getFriends($userId)->pluck('user_id');
        $username = $request->route('username');
        $usernamesId = User::where('user_username', $username)->pluck('user_id')->first();
        $isFriend = $friendIds->contains($usernamesId);
        if ($isFriend) {
            $userInformation = User::where('user_id', $usernamesId)->with(['posts.comments.user.activeProfileImage', 'posts.images', 'posts.user.activeProfileImage', 'activeProfileImage', 'images', 'profileImage', 'coverImages', 'activeCoverImage', 'about'])->first();
            $userInformation->friends = User::getFriends($usernamesId);
            return response()->json([
                'message' => 'Here All the user information',
                'data' => $userInformation
            ]);
        } else {
            return response()->json([
                'message' => 'You are not friends with this user',
                'data' => null
            ]);

        }
    }

    public function getNotifications() {
        $userId = auth()->user()->user_id;
        $notifications = Notification::where('user_id', $userId)->get();
        return response()->json([
            'message' => 'Here all Notifications',
            'data' => $notifications
        ]);
    }
}
