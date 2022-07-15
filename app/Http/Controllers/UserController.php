<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\user\UserResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user=User::all();
        return response()->json($user, 200);
    }

    
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed|min:6',
          ]);
          $user=new User();
          $user->name=$request->name;
          $user->email=$request->email;
          $user->password=bcrypt($request->password);
          if($user->save()){
            return response()->json([
                'message'=>'user is successfully registered',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }

    public function show($id)
    {
     $data=User::where('id',$id)->first();
       return response()->json($data);
    }

  
    public function update(Request $request, $id){
        $user= User::where('id',$id)->first();
         $validateData=$request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|email|unique:users,email,'.$id,
          ]);
           $user->name=$request->name;
          $user->email=$request->email;
          if($user->save()){
            return response()->json([
                'message'=>'user is successfully Updated',
                'status_code'=>201,
            ],201);
          }else{
            return response()->json([
                'message'=>'something happened wrong,please try again!',
                'status_code'=>500,
            ],500);
          }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $user=User::find($id);
        // dd($user->toArray());
         if($user->delete()){
            return response()->json([
                'message'=>'user deleted successfully',
                'status_code'=>200
            ],200);
         }else{
            return response()->json([
                'message'=>'something wrong happen please try again!',
                'status_code'=>500
            ],500); 
         }   
         }
}
