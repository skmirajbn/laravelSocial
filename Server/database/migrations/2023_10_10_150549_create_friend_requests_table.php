<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('friend_requests', function (Blueprint $table) {
            $table->id('friend_request_id');
            $table->integer('to_user_id');
            $table->integer('from_user_id');
            $table->integer('friend_request_status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('friend_requests');
    }
};