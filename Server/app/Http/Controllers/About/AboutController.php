<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;

class AboutController extends Controller {
    function get() {
        $user = auth()->user();
        echo $user['user_id'];
    }
}