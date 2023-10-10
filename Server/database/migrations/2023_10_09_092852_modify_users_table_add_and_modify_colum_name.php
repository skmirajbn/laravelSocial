<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->renameColumn('id', 'user_id');
            // Add new columns with the 'after' method
            $table->string('user_first_name')->after('email');
            $table->string('user_last_name')->after('user_first_name');
            $table->string('user_username')->after('user_last_name');
            $table->string('user_phone')->after('user_username');
            $table->string('user_profile_photo')->nullable()->after('user_phone');
            $table->date('user_birth_date')->nullable()->after('user_profile_photo');
            $table->integer('user_gender')->after('user_birth_date');
            $table->integer('role_id')->default(2)->after('user_gender');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name');
            $table->renameColumn('user_id', 'id');
            $table->dropColumn([
                'user_first_name',
                'user_last_name',
                'user_username',
                'user_phone',
                'user_profile_photo',
                'user_birth_date',
                'user_gender',
                'role_id',
            ]);
        });
    }
};