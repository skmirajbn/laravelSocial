<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('coversation_users', function (Blueprint $table) {
            $table->id('conversation_user_id');
            $table->integer('user_id');
            $table->integer('conversation_id');
            $table->string('conversation_user_role');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('coversation_users');
    }
};