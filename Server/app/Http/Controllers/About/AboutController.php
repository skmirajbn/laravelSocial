<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller {
    function get() {
        $user = auth()->user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized', 401]);
        }
        $id = $user['user_id'];
        $about = About::where('user_id', $id)->first();
        if ($about) {
            return response()->json(['bio' => $about['about_bio']]);
        } else {
            return response()->json([
                'bio' => '',
            ]);
        }

    }
    function put(Request $request) {
        // $user = auth()->user();
        // if ($request->expectsJson()) {
        //     $request->input('name');
        // }
        echo "put request";
        // if (!$user) {
        //     return response()->json(['message' => 'Unauthorized', 401]);
        // }
        // $id = $user['user_id'];
        // $about = About::where('user_id', $id)->first();
        // if ($about) {
        //     return response()->json(['bio' => $about['about_bio']]);
        // } else {
        //     return response()->json([
        //         'bio' => '',
        //     ]);
        // }

    }
}