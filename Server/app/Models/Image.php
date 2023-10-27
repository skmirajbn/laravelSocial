<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model {
    use HasFactory;
    protected $primaryKey = 'image_id';
    protected $fillable = [
        'image_id',
        'post_id',
        'image_path',
    ];
    public function user() {
        return $this->hasOneThrough(User::class, Post::class, 'user_id', 'user_id', 'post_id');
    }
}