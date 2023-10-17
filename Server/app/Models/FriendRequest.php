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
        'to_user_id',
        'from_user_id',
        'friend_request_status',
    ];

    /**
     * Check if a friend request already exists between two users.
     *
     * @param int $fromUserId
     * @param int $toUserId
     * @return bool
     */
    public static function existsFriendRequest($fromUserId, $toUserId) {
        return self::where(function ($query) use ($fromUserId, $toUserId) {
            $query->where('from_user_id', $fromUserId)
                ->where('to_user_id', $toUserId);
        })->orWhere(function ($query) use ($fromUserId, $toUserId) {
            $query->where('from_user_id', $toUserId)
                ->where('to_user_id', $fromUserId);
        })->exists();
    }
}