<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Backend\MailController;
use App\Http\Controllers\Backend\CollegeController;
use App\Http\Controllers\Backend\PaymentController;
use App\Http\Controllers\Backend\SemisterController;
use App\Http\Controllers\Backend\DepartmentController;
use App\Http\Controllers\Backend\StudyLevelController;
use App\Http\Controllers\Backend\AcadamicYearController;
use App\Http\Controllers\Backend\AnnouncementController;
use App\Http\Controllers\Backend\FreshStudentController;
use App\Http\Controllers\Backend\AdmissionTypeController;
use App\Http\Controllers\Backend\GraduatedStudentController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::group(['prefix'=>'user'],function(){
    Route::group(['middleware'=>'auth:api'],function(){
      Route::apiResource('/users',UserController::class)->middleware('scope:do_anything');
      Route::apiResource('/colleges',CollegeController::class)->middleware('scope:do_anything');
      Route::apiResource('/departements',DepartmentController::class)->middleware('scope:do_anything');
      Route::apiResource('/acadamic_years',AcadamicYearController::class)->middleware('scope:do_anything');
      Route::apiResource('/semisters',SemisterController::class)->middleware('scope:do_anything');
      Route::apiResource('/study_levels',StudyLevelController::class)->middleware('scope:do_anything');
      Route::apiResource('/admission_types',AdmissionTypeController::class)->middleware('scope:do_anything');
      Route::apiResource('/announcements',AnnouncementController::class)->middleware('scope:do_anything');
      Route::get('/announcementStatus/{id}',[AnnouncementController::class,'statusDeactivate'])->middleware('scope:do_anything');
     // student
     Route::apiResource('/fresh_students',FreshStudentController::class)->middleware('scope:do_anything');
     Route::apiResource('/graduate_students',GraduatedStudentController::class)->middleware('scope:do_anything');
     Route::post('/importFreshStudents',[FreshStudentController::class,'importFreshStudents'])->middleware('scope:do_anything');
     Route::post('/importGraduateStudents',[GraduatedStudentController::class,'importGraduateStudents'])->middleware('scope:do_anything');
      //payments
     Route::apiResource('/payments',PaymentController::class)->middleware('scope:do_anything');
      // mails
     Route::apiResource('/mails',MailController::class)->middleware('scope:do_anything');
      
      Route::post('edit-category',function(){
          return response()->json([
             'message'=>'admin access',
             'status_code'=>200,
          ],200);
        })->middleware('scope:do_anything');
        Route::post('create-category',function(){
            return response()->json([
               'message'=>'Everyone access',
               'status_code'=>200,
            ],200);
          })->middleware('scope:do_anything,can_create');
    });
   Route::get('/getfreshdata/{id}',[FreshStudentController::class,'getStudentData']);

});