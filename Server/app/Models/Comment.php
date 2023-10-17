<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model {
    use HasFactory;

    protected $primaryKey = 'profile_image_id';


    protected $fillable = [
        'comment_id',
        'user_id',
        'comment_text',
        'post_id',
        'status',
    ];

    function user() {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}