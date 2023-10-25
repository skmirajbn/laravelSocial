<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model {
    use HasFactory;
    protected $primaryKey = 'message_id';

    protected $fillable = [
        'message_text',
        'user_id',
        'conversation_id',
    ];
}
