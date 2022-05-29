<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\BackOffice\ServiceController;
use App\Http\Controllers\BackOffice\GraduateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login' ,[AuthController::class,'login']);
Route::post('register' ,[AuthController::class,'register']);
Route::group(['middleware'=>['auth:api']],function(){
    Route::get('user-details' ,[AuthController::class,'details']);
    Route::post('logout' ,[AuthController::class,'logout']);

    Route::resource('services', ServiceController::class);
    Route::get('clients/{id}', [ClientController::class, 'show']);
    Route::put('clients/{id}', [ClientController::class, 'update']);
    Route::post('bookings' , [BookingController::class, 'saveBooking']);
    Route::get('view-appointments/{id}' , [BookingController::class, 'viewAppointments']);
    Route::put('rate-booking/{id}' , [BookingController::class, 'rateBooking']);
});
