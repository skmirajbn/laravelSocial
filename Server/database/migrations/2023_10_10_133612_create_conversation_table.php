<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('conversation', function (Blueprint $table) {
            $table->id('conversation_id');
            $table->string('conversation_title');
            $table->string('conversation_image')->nullable();
            $table->string('conversation_type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('conversation');
    }
};