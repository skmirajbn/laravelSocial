<?php

namespace App\Http\Controllers\DiscoverPeople;

use App\Http\Controllers\Controller;

class DiscoverPeopleController extends Controller {
    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];
        echo $userId;
    }
}