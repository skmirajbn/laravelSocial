<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model {
    use HasFactory;
    protected $primaryKey = 'conversation_id';
    function users() {
        return $this->belongsToMany(User::class, "conversation_users", "conversation_id", "user_id")
            ->withPivot('conversation_user_role');
    }
    function conversationUsers() {
        return $this->hasMany(ConversationUser::class, "conversation_id", "conversation_id");
    }
}
