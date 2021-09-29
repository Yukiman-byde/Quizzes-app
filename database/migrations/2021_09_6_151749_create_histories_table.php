<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histories', function (Blueprint $table) {
           $table->bigIncrements('id');
            $table->integer('wholeNumber');
            $table->integer('solvedNumber');
            $table->unsignedBigInteger('display_id');
            $table->unsignedBigInteger('user_id');
            
            $table->foreign('display_id')->references('id')->on('displays')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histroy');
    }
}
