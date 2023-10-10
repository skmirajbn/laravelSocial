<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use App\Models\About;

class AboutController extends Controller {
    function get() {
        $user = auth()->user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized', 401]);
        }
        $id = $user['user_id'];
        $about = About::where('user_id', $id)->first();
        if ($about) {
            return response()->json([
                'status' => 'success',
                'data' => ['bio' => $about['about_bio']],
                'message' => 'Bio Data Retrive Sucessfully',
                'code' => 200
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => null,
                'message' => 'Not Found',
                'code' => 404
            ]);
        }

    }
}