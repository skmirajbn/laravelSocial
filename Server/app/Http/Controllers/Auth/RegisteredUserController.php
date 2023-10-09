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
            'user_username' => ['required', 'string', 'max:255'],
            'user_email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'user_password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_phone' => ['string', 'max:255'],
            'user_profile_photo' => ['string', 'max:255'],
            'user_birth_date' => ['required', 'date', 'date_format:d/m/Y'],
            'user_gender' => ['required', 'integer'],
            'role_id' => ['required', 'integer'],
        ]);

        $user = User::create([
            'user_first_name' => $request->fname,
            'user_last_name' => $request->lname,
            'user_username' => $request->username,
            'user_email' => $request->email,
            'user_password' => Hash::make($request->password),
            'user_phone' => $request->phone,
            'user_profile_photo' => $request->photo,
            'user_birth_date' => $request->date,
            'user_gender' => $request->gender,
            'role_id' => $request->role
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}