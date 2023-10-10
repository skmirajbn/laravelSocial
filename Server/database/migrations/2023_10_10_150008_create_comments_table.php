<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('comments', function (Blueprint $table) {
            $table->id('comment_id');
            $table->string('comment_text', 50);
            $table->text('comment');
            $table->foreignId('user_id')->constrained('users', 'user_id');
            $table->foreignId('comment_like_id')->constrained('comments', 'comment_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('comments');
    }
};