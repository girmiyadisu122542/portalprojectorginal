<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreshStudent extends Model
{
    public function college(){
        return $this->belongsTo(Collegue::class,'college_id','id');
     }
     public function year(){
        return $this->belongsTo(AcadamicYear::class,'year_id','id');
     }
}
