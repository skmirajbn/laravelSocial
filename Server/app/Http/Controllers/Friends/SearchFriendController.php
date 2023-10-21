<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;
use App\Models\User;

class SearchFriendController extends Controller {
    function search($keywords) {
        $users = User::where('user_first_name', 'like', '%' . $keywords . '%')
            ->orWhere('email', 'like', '%' . $keywords . '%')
            ->get();
        return response()->json($users);
    }
}
