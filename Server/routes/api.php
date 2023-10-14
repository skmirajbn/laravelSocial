<?php

use App\Http\Controllers\About\AboutController;
use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\Profile\ProfileImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// About Bio
Route::middleware(['auth'])->get('/about/bio', [AboutController::class, 'get']);
Route::middleware(['auth'])->put('/about/bio', [AboutController::class, 'put']);
// Posts
Route::middleware(['auth'])->post('/posts', [PostController::class, 'post']);
Route::middleware(['auth'])->get('/posts', [PostController::class, 'get']);
// Profile Picture
Route::middleware(['auth'])->get('/profile-image', [ProfileImageController::class, 'get']);
Route::middleware(['auth'])->post('/profile-image', [ProfileImageController::class, 'post']);