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
}