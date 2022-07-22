<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calander extends Model
{
    use HasFactory;
    public function accadamicYear(){
        return $this->belongsTo(AcadamicYear::class,'acadamic_year','id');
     }
     public function addmissionType(){
        return $this->belongsTo(AdmissionType::class,'addmission_type','id');
     }
}
