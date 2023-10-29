<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentLike extends Model {
    use HasFactory;
    protected $primaryKey = 'comment_like_id';
    protected $fillable = [
        'comment_like_id',
        'comment_id',
        'user_id',
    ];
}
