<?php

namespace App\Http\Controllers\Conversation;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\ConversationUser;
use App\Models\User;
use Illuminate\Http\Request;

class ConversationController extends Controller {
    function create(Request $request) {
        $user1 = auth()->user()->user_id;
        $user2 = $request->user_2_id;

        $user1FriendsIds = User::getFriends($user1)->pluck('user_id')->toArray();

        if (!in_array($user2, $user1FriendsIds)) {
            return response()->json([
                'success' => false,
                'message' => 'Can not create conversation without beign friend',
            ]);
        }

        $conversation = Conversation::where('conversation_type', 'individual')
            ->where('user_id', $user1)
            ->where('user_id', $user2)
            ->first();
        if ($conversation) {
            return response()->json([
                'sucess' => true,
                'data' => $conversation,
            ]);
        }

        $conversation = new Conversation();
        $conversation->conversation_title = '';
        $conversation->conversation_image = '';
        $conversation->conversation_type = 'individual';
        $conversation->save();

        $conversationUser1 = new ConversationUser();
        $conversationUser1->conversation_id = $conversation->id;
        $conversationUser1->user_id = $user1->id;
        $conversationUser1->conversation_user_role = 'creator';
        $conversationUser1->save();

        $conversationUser2 = new ConversationUser();
        $conversationUser2->conversation_id = $conversation->id;
        $conversationUser2->user_id = $user2->id;
        $conversationUser2->conversation_user_role = 'participant';
        $conversationUser2->save();

        return response()->json([
            'success' => true,
            'data' => $conversation,
        ]);
    }
    function get(Request $request) {
        echo "Hello";
    }
    function update(Request $request) {
        echo "Hello";
    }
    function delete(Request $request) {
        echo "Hello";
    }
}
