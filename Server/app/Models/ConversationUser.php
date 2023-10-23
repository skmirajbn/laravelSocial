<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConversationUser extends Model {
    use HasFactory;
    protected $primaryKey = 'conversation_user_id';
    function user() {
        return $this->hasOne(User::class, "user_id", "user_id");
    }
    public function conversation() {
        return $this->belongsTo(Conversation::class, "conversation_id", "conversation_id");
    }
}
