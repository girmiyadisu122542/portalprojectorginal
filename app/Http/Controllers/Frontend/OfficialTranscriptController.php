<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Models\GraduatedStudent;
use App\Models\OfficialTranscript;
use DB;
use App\Http\Controllers\Controller;

class OfficialTranscriptController extends Controller
{
    public function index()
    {
        $graduate_student=OfficialTranscript::with(['college','year','admission','study','departement'])->get();
        return response()->json($graduate_student);
    }

  
    public function sendOfficialRequest(Request $request )
    {
        $validateData=$request->validate([
            'first_name'=>'required',
            'father_name'=>'required',
            'grand_father_name'=>'required',
            'sex'=>'required',
            'university_id'=>'required|unique:official_transcripts',
            'mobile_number'=>'required|unique:official_transcripts',
            'email'=>'required|email|unique:official_transcripts',
            'admission_type'=>'required',
            'study_level'=>'required',
            'college_id'=>'required',
            'departement_id'=>'required',
            'year_of_graduation'=>'required',
            'name_of_institution'=>'required',
            'destination_country'=>'required',
            'address_of_institution'=>'required',
            'mailing_agent'=>'required',
             //'bank_receipt'=>'required'
           
           
          ]);
        
            $official_request=new OfficialTranscript();
            $official_request->first_name=$request->first_name;
            $official_request->father_name=$request->father_name;
            $official_request->grand_father_name=$request->grand_father_name;
            $official_request->sex=$request->sex;
            $official_request->university_id=$request->university_id;
            $official_request->mobile_number=$request->mobile_number;
            $official_request->email=$request->email;
            $official_request->admission_type=$request->admission_type;
            $official_request->study_level=$request->study_level;
            $official_request->college_id=$request->college_id;
            $official_request->departement_id=$request->departement_id;
            $official_request->year_of_graduation=$request->year_of_graduation;
            $official_request->name_of_institution=$request->name_of_institution;
            $official_request->destination_country=$request->destination_country;
            $official_request->address_of_institution=$request->address_of_institution;
            $official_request->mailing_agent=$request->mailing_agent;
             
            if($request->hasFile('bank_reciept')){

               $file=$request->file('bank_reciept');
               
               $file_name_ext=time().'.'.$file->getClientOriginalExtension();
               $upload_path='official_transcript/receipt/';
               $name=$upload_path.$file_name_ext;
               $file->move(public_path($upload_path),$file_name_ext); 
               $official_request->bank_receipt=$name;
                   
            }
            if($request->hasFile('other_document')){

               $file=$request->file('other_document');
         
              $file_name=time().'.'.$file->getClientOriginalExtension();
              $upload_path='official_transcript/other_document/';
              $name=$upload_path.$file_name;
              $file->move(public_path($upload_path),$file_name); 
              $official_request->other_documents=$name;
         
          }
         if($request->hasFile('cost_sharing')){

           $file=$request->file('cost_sharing');
          $file_name=time().'.'.$file->getClientOriginalExtension();
          $upload_path= 'official_transcript/cost_sharing/';
            $name=$upload_path.$file_name;
           $file->move(public_path($upload_path),$file_name); 
            $official_request->cost_sharing_letter=$name;
             }
            $app_num= rand('000000','999999');
            $official_request->application_number=$app_num;
              
            if($official_request->save()){
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

    public function getofficialApplicants(){
        // return OfficialTranscript::all();
        //dd('hello');
        $applicants=DB::table('official_transcripts')->where('status','=',0)->get();
       return response()->json($applicants);
       
    }

}
