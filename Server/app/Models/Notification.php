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
    function sendNotification($notificationType, $notificationMessage, $notificationLink, $notificationStatus, $userId) {
        $notification = new Notification();
        $notification->notification_type = $notificationType;
        $notification->notification_message = $notificationMessage;
        $notification->notification_link = $notificationLink;
        $notification->notification_status = $notificationStatus;
        $notification->user_id = $userId;
        $notification->save();
        return $notification;
    }
    function user() {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
