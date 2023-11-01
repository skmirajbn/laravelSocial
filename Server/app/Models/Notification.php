<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model {
    use HasFactory;
    private $primaryKey = 'notification_id';
    private $fillable = [
        'notificaiton_id',
        'notification_type',
        'notification_message',
        'notification_link',
        'notification_status',
    ];
    function user() {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
