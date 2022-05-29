<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BackOffice\AuthController;
use App\Http\Controllers\BackOffice\BookingController;
use App\Http\Controllers\BackOffice\RequirementController;
use App\Http\Controllers\BackOffice\ServiceController;

Route::get('checkuser',[AuthController::class,'checkUser']);
Route::post('login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::get('get-user',[AuthController::class,'getLoginUser']);
    Route::get('logout',[AuthController::class,'logout']);
    
    Route::resource('services' , ServiceController::class);
    Route::resource('requirements' , RequirementController::class);
    Route::get('bookings' , [BookingController::class, 'index']);
    Route::put('accept-booking/{id}' , [BookingController::class, 'acceptBooking']);
    Route::put('done-booking/{id}' , [BookingController::class, 'doneBooking']);
});
