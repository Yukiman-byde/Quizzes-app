<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DisplayHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('display_history', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('history_id');
            $table->unsignedBigInteger('display_id');
            $table->foreign('history_id')->references('id')->on('histories')->onDelete('cascade');
            $table->foreign('display_id')->references('id')->on('displays')->onDelete('cascade');
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
        //
    }
}
