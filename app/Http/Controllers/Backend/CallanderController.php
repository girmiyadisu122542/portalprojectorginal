<?php

namespace App\Http\Controllers\Backend;

use App\Models\Calander;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CallanderController extends Controller
{
    public function index()
    {
        return Calander::with('accadamicYear','addmissionType')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'name'=>'required',
        //     'Amount_in_BIRR	'=>'required',
        //     'Amount_in_USD'=>'required',
        // ]);
        $callander=new Calander();
        $callander->date=$request->date;
        $callander->activity=$request->activity;
        $callander->acadamic_year=$request->acadamic_year;
        $callander->addmission_type=$request->addmission_type;

        $callander->save();
        return response()->Json(['mesage'=>'data inserted successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // dd('hello');
        return Calander::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // dd('edit');
      return  $payment=Calander::find($id);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd('update');
       $callander=Calander::find($id);
       $callander->date=$request->date;
        $callander->activity=$request->activity;
        $callander->acadamic_year=$request->acadamic_year;
        $callander->addmission_type=$request->addmission_type;
        $callander->update();
        return response()->Json(['message'=>'data updated successfully']);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
           $callander=Calander::find($id);
           $callander->delete();
           return response()->Json(['message'=>'data deleted successfully']);
    }
}
