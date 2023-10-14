<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\ProfileImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class ProfileImageController extends Controller {
    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];
        $profileImage = ProfileImage::where('user_id', $userId)->where('status', 1)->first();
        return response()->json($profileImage);
    }
    function post(Request $request) {
        $user = auth()->user();
        $userId = $user['user_id'];
        ProfileImage::where('user_id', $userId)->update(['status' => 0]);

        $profileImageFile = $request->file('profileImage');

        $profileImageObject = ImageManagerStatic::make($profileImageFile);
        $profileImageObject->fit(640, 640);
        $profileImageObject->encode('jpg', 60);
        $generatedImageName = Str::uuid() . '.jpg';
        $imagePath = 'public/profileImages/' . $generatedImageName;

        Storage::put($imagePath, $profileImageObject->stream());

        $createdProfilePicture = ProfileImage::create([
            'user_id' => $userId,
            'image_path' => 'storage/profileImages/' . $generatedImageName,
            'status' => 1
        ]);

        if (!$createdProfilePicture) {
            return response()->json([
                'message' => 'Profile Picture Creationg Failed'
            ]);
        }

        return response()->json([
            'message' => 'Profie picture uploaded',
            'data' => $createdProfilePicture
        ]);
    }

}