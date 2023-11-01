<?php

namespace App\Http\Controllers\Comment;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Notification;
use Illuminate\Http\Request;

class CommentController extends Controller {
    function post(Request $request) {
        $user = auth()->user();
        $userId = $user['user_id'];
        $postId = $request->route('postId');
        $commentText = $request->input('commentText');
        $createdComment = Comment::create([
            'user_id' => $userId,
            'post_id' => $postId,
            'comment_text' => $commentText
        ]);
        if (!$createdComment) {
            return response()->json([
                'message' => 'Comment Failed'
            ]);
        }
        return response()->json([
            'message' => 'Comment Created Sucessfully',
            'data' => $createdComment
        ]);
    }
    function like($commentId) {
        $user = auth()->user();
        $userId = $user['user_id'];
        $comment = Comment::find($commentId);

        if ($comment->isLikedBy($userId)) {
            $comment->unlike($userId);
            return response()->json([
                'message' => 'Comment Unliked Sucessfully',
                'data' => $comment
            ]);
        } else {
            $comment->like($userId);
            $commentOwnerUserId = $comment->user->user_id;
            $Notification = Notification::create([
                'user_id' => $commentOwnerUserId,
                'notification_type' => 'comment',
                'notification_message' => $user->user_first_name . " " . $user->user_last_name . " Liked comment of  your post",
                'notification_link' => 'comment/' . $commentId,
                'notification_status' => 1,
            ]);
            return response()->json([
                'message' => 'Comment Liked Sucessfully',
                'data' => [
                    'comment' => $comment,
                    'notification' => $Notification
                ],
            ]);
        }
    }
}