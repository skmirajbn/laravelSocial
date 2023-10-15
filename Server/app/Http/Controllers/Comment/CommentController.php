<?php

namespace App\Http\Controllers\Comment;

use App\Http\Controllers\Controller;
use App\Models\Comment;
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
}