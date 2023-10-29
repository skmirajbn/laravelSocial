<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostLike extends Model {
    use HasFactory;
    protected $primaryKey = 'post_like_id';
    protected $fillable = [
        'post_like_id',
        'post_id',
        'user_id',
        'post_like_type_id',
    ];
    public function post() {
        return $this->belongsTo(Post::class, 'post_id', 'post_id');
    }
    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
