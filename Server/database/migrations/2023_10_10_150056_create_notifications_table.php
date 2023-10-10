<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id('notification_id');
            $table->string('notification_type', 50);
            $table->string('notification_message', 50);
            $table->string('notification_link', 50);
            $table->foreignId('user_id')->constrained('users', 'user_id');
            $table->integer('notification_status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('notifications');
    }
};