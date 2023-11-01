<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model {
    use HasFactory;
    protected $primaryKey = 'notification_id';
    protected $fillable = [
        'notificaiton_id',
        'notification_type',
        'notification_message',
        'notification_link',
        'notification_status',
        'user_id',
    ];
    function user() {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
