<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalandersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calanders', function (Blueprint $table) {
            $table->id();
            $table->string("date");
            $table->string("activity");
            $table->unsignedBigInteger('acadamic_year')->nullable();
            $table->foreign('acadamic_year')->references('id')->on('acadamic_years')->onDelete('restrict')->onUpdate('cascade');
            $table->unsignedBigInteger('addmission_type')->nullable();
            $table->foreign('addmission_type')->references('id')->on('admission_types')->onDelete('restrict')->onUpdate('cascade');
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
        Schema::dropIfExists('calanders');
    }
}
