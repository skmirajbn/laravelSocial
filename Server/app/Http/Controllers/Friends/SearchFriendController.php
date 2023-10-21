<?php

namespace App\Http\Controllers\Friends;

use App\Http\Controllers\Controller;

class SearchFriendController extends Controller {
    function search($keywords) {
        echo $keywords;
    }
}
