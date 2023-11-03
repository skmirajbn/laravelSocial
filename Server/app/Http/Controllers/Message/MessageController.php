<?php

namespace App\Http\Controllers\Message;

use App\Events\MyEvent;
use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller {
    function send(Request $request) {
        $userId = Auth()->user()->user_id;
        $messageText = $request->message_text;
        $conversationId = $request->conversation_id;


        $createdMessage = [
            'user_id' => $userId,
            'conversation_id' => $conversationId,
            'message_text' => $messageText,
        ];

        $createdMessage = Message::create($createdMessage);
        $messagesData = Message::where('message_id', $createdMessage->message_id)->with('user.activeProfileImage')->first();
        if ($createdMessage) {
            event(new MyEvent($messagesData));
            return response()->json([
                'message' => 'Message Sent',
                'data' => $messagesData
            ]);
        }

    }
    function get($conversation_id) {
        $conversation = Message::where('conversation_id', $conversation_id)->with('user.activeProfileImage')->get();
        return response()->json($conversation);

    }
}
