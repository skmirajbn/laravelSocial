<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('posts', function (Blueprint $table) {
            $table->id('post_id');
            $table->string('post_title');
            $table->text('post_body');
            $table->string('post_image');
            $table->foreignId('user_id')->constrained('users', 'user_id');
            $table->foreignId('comment_id')->constrained('comments', 'comment_id');
            $table->foreignId('post_like_id')->constrained('post_like_id', 'post_like_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('posts');
    }
};