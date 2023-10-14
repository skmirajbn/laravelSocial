<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('cover_images', function (Blueprint $table) {
            $table->id('cover_image_id'); // Use 'id' to create an auto-incrementing primary key.
            $table->integer('user_id');
            $table->string('image_path');
            $table->integer('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('cover_images');
    }
};