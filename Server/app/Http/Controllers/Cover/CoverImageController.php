<?php

namespace App\Http\Controllers\Cover;

use App\Http\Controllers\Controller;
use App\Models\CoverImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class CoverImageController extends Controller {
    function get() {
        $user = auth()->user();
        $userId = $user['user_id'];
        $profileImage = CoverImage::where('user_id', $userId)->where('status', 1)->first();
        return response()->json($profileImage);
    }
    function post(Request $request) {
        $user = auth()->user();
        $userId = $user['user_id'];
        CoverImage::where('user_id', $userId)->update(['status' => 0]);

        $coverImageFile = $request->file('coverImage');

        $coverImageObject = ImageManagerStatic::make($coverImageFile);
        $coverImageObject->fit(900, 480);
        $coverImageObject->encode('jpg', 60);
        $generatedImageName = Str::uuid() . '.jpg';
        $imagePath = 'public/profileImages/' . $generatedImageName;

        Storage::put($imagePath, $coverImageObject->stream());

        $createdCoverImage = CoverImage::create([
            'user_id' => $userId,
            'image_path' => 'storage/profileImages/' . $generatedImageName,
            'status' => 1
        ]);

        if (!$createdCoverImage) {
            return response()->json([
                'message' => 'Cover Image upload Failed'
            ]);
        }

        return response()->json([
            'message' => 'Cover picture uploaded',
            'data' => $createdCoverImage
        ]);
    }

}