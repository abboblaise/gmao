<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demarreurs', function (Blueprint $table) {
            $table->id();
            $table->string('numSerie')->unique();
            $table->string('nom');
            $table->string('type')->nullable();
            $table->string('voltage')->nullable();
            $table->timestamps();
            $table->foreignId('vehicule_id')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demarreurs');
    }
};
