<?php

namespace App\Http\Controllers\Frontend;

use App\Models\AdmitStudent;
use Illuminate\Http\Request;
use App\Mail\ApplicationMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class AdmissionController extends Controller
{

    public function sendApplicationFormRequest(Request $request){
        $validateData=$request->validate([
            'undergraduate_unversity_name'=>'required',                    
            'undergraduate__cgpa'=>'required',
            'undergraduate_field_of_study'=>'required',
            'study_level'=>'required',
            'college_id'=>'required',
            'departement_id'=>'required',
            'year_id'=>'required',
            'announcement_id'=>'required',
            'finantial_support'=>'required',
            'first_name'=>'required',
            'father_name'=>'required',
            'grand_father_name'=>'required',
            'sex'=>'required',
            'date_of_birth'=>'required',
            'nationality'=>'required',
            'region'=>'required',
            'zone_or_subcity'=>'required',
            'woreda'=>'required',
            'mobile_number'=>'required|unique:admit_students',
            'email'=>'required|unique:admit_students',
           
          ]);
           $admit_student=new AdmitStudent();
            $admit_student->undergraduate_unversity_name=$request->undergraduate_unversity_name;
            $admit_student->undergraduate__cgpa=$request->undergraduate__cgpa;
            $admit_student->undergraduate_field_of_study=$request->undergraduate_field_of_study;
            $admit_student->postgraduate_unversity_name=$request->postgraduate_unversity_name;
            $admit_student->postgraduate__cgpa=$request->postgraduate__cgpa;
            $admit_student->postgraduate_field_of_study=$request-> postgraduate_field_of_study;
            $admit_student->admission_type=$request->  admission_type;
            $admit_student->study_level=$request->study_level;
            $admit_student->college_id=$request->college_id;
            $admit_student->departement_id=$request->departement_id;
            $admit_student->year_id=$request->year_id;
            $admit_student->announcement_id=$request->announcement_id;
            $admit_student->finantial_support=$request->finantial_support;
            $admit_student->first_name=$request->first_name;
            $admit_student->father_name=$request->father_name;
            $admit_student->grand_father_name=$request->grand_father_name;
            $admit_student->sex=$request->sex;
            $admit_student->date_of_birth=$request-> date_of_birth;
            $admit_student->nationality=$request->nationality;
            $admit_student->region=$request->  region;
            $admit_student->zone_or_subcity=$request->zone_or_subcity;
            $admit_student->woreda=$request->woreda;
            $admit_student->mobile_number=$request->mobile_number;
            $admit_student->email=$request->email;
            $app_num=rand('000000','999999');
             $admit_student->application_number=$app_num; 
             if($admit_student->save()){
               $details= [
                'title'=>'MAIL FROM WOLLO UNIVERSITY PORTAL',
                'body'=>"This is your application number from your addmission request",
                'app_number'=>$app_num
               ];
              // Mail::to($request->email)->send(new ApplicationMail($details));

                return response()->json([
                    'message'=>'Your Application is successfully sent',
                    'status_code'=>201,
                ],201);
              }else{
                return response()->json([
                    'message'=>'something happened wrong,please try again!',
                    'status_code'=>500,
                ],500);
              }


           
    }
   
}
