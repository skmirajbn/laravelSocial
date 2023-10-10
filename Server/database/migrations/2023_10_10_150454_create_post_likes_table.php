<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('post_likes', function (Blueprint $table) {
            $table->id('post_like_id');
            $table->foreignId('post_id')->constrained('posts', 'post_id');
            $table->foreignId('user_id')->constrained('users', 'user_id');
            $table->foreignId('post_like_type_id')->constrained('post_like_types', 'post_like_type_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('post_likes');
    }
};