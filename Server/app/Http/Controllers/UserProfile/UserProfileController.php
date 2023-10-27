<?php

namespace App\Http\Controllers\UserProfile;

use App\Http\Controllers\Controller;
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
            $userInformation = User::where('user_id', $usernamesId)->with(['posts.comments.user.activeProfileImage', 'activeProfileImage', 'images', 'profileImage'])->first();
            dd($userInformation->toArray());
        }
    }
}
