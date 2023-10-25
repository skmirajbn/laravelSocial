<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller {
    function send(Request $request) {
        $userId = Auth()->user()->user_id;
        $messageText = $request->message_text;
        $conversationId = $request->conversation_id;

        $createdMessage = Message::create([
            'user_id' => $userId,
            'conversation_id' => $conversationId,
            'message_text' => $messageText,
        ]);

        if ($createdMessage) {
            return response()->json([
                'message' => 'Message Sent',
                'data' => $createdMessage
            ]);
        }

    }
}
