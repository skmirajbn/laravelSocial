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

        $conversations = Conversation::with('users')->where('conversation_type', 'individual')->get();
        if ($conversations) {
            $matchedUser = 0;
            $selectedConversation = null;
            foreach ($conversations as $conversation) {
                $users = $conversation->users->toArray();
                // dd($conversation->users->toArray());
                foreach ($users as $user) {
                    // dd($user['user_id']);
                    if ($user["user_id"] == $user1 || $user["user_id"] == $user2) {
                        $matchedUser++;
                    }
                }
                if ($matchedUser == 2) {
                    $selectedConversation = $conversation;
                }
            }

            if ($matchedUser == 2) {
                return response()->json([
                    'success' => true,
                    'data' => $selectedConversation,
                ]);
            }
        }

        $newConversation = new Conversation();
        $newConversation->conversation_title = '';
        $newConversation->conversation_image = '';
        $newConversation->conversation_type = 'individual';
        $newConversation->save();

        $conversationUser1 = new ConversationUser();
        $conversationUser1->conversation_id = $newConversation->conversation_id;
        $conversationUser1->user_id = $user1;
        $conversationUser1->conversation_user_role = 'creator';
        $conversationUser1->save();

        $conversationUser2 = new ConversationUser();
        $conversationUser2->conversation_id = $newConversation->conversation_id;
        $conversationUser2->user_id = $user2;
        $conversationUser2->conversation_user_role = 'participant';
        $conversationUser2->save();

        $conversationId = $newConversation->conversation_id;
        $updateConversation = Conversation::where('conversation_id', $conversationId)->with('users')->first();
        // dd($updateConversation->toJson(JSON_PRETTY_PRINT));



        return response()->json([
            'success' => true,
            'data' => $updateConversation->toArray(),
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
