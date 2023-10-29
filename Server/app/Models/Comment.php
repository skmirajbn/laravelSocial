<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model {
    use HasFactory;

    protected $primaryKey = 'comment_id';


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
    function likes() {
        return $this->hasMany(CommentLike::class, 'comment_id', 'comment_id');
    }
    function isLikedBy($userId) {
        return $this->likes()->where('user_id', $userId)->exists();
    }
    function unlike($userId) {
        $this->likes()->where('user_id', $userId)->delete();
    }
    public function like($userId) {
        $this->likes()->create([
            'user_id' => $userId,
        ]);
    }
}