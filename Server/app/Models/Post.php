<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    use HasFactory;

    protected $primaryKey = 'post_id';


    protected $fillable = [
        'post_id',
        'post_code',
        'post_title',
        'post_body',
        'user_id',
    ];

    public function images() {
        return $this->hasMany(Image::class, 'post_id');
    }
    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
    public function comments() {
        return $this->hasMany(Comment::class, 'post_id', 'post_id');
    }
    public function postLikes() {
        return $this->hasMany(PostLike::class, 'post_id', 'post_id');
    }

}