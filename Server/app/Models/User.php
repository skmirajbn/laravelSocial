<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $primaryKey = 'user_id';
    protected $fillable = [
        'user_first_name',
        'user_last_name',
        'user_username',
        'user_phone',
        'user_profile_photo',
        'user_birth_date',
        'user_gender',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function getAuthPassword() {
        return $this->password;
    }
    public function getAuthIdentifierName() {
        return 'email';
    }

    public function posts() {
        return $this->hasMany(Post::class, 'user_id');
    }
    public function profileImage() {
        return $this->hasMany(ProfileImage::class, 'user_id', 'user_id');
    }
    public function activeProfileImage() {
        return $this->hasOne(ProfileImage::class, 'user_id', 'user_id')->where('status', 1);
    }
}