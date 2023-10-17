<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FriendRequest extends Model {
    use HasFactory;
    use HasFactory;
    protected $primaryKey = 'friend_request_id';
    protected $fillable = [
        'friend_request_id',
        'self_user_id',
        'from_user_id',
        'friend_request_status',
    ];
}