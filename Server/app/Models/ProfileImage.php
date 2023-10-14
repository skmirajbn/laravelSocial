<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileImage extends Model {
    use HasFactory;

    protected $primaryKey = 'profile_image_id';


    protected $fillable = [
        'profile_image_id',
        'user_id',
        'image_path',
        'status',
    ];
}