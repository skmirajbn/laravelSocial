<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller {
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response {
        $request->validate([
            'user_first_name' => ['required', 'string', 'max:255'],
            'user_last_name' => ['required', 'string', 'max:255'],
            'user_username' => ['required', 'string', 'max:255', 'unique:' . User::class],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_phone' => ['required', 'string', 'unique:' . User::class, 'regex:/^01\d{9}$/'],
            'user_profile_photo' => ['string', 'max:255'],
            'user_birth_date' => ['required', 'date', 'date_format:Y-m-d'],
            'user_gender' => ['required', 'integer'],
        ]);

        $user = User::create([
            'user_first_name' => $request->user_first_name,
            'user_last_name' => $request->user_last_name,
            'user_username' => $request->user_username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_phone' => $request->user_phone,
            'user_profile_photo' => $request->user_profile_photo,
            'user_birth_date' => $request->user_birth_date,
            'user_gender' => $request->user_gender,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}