<?php

use App\Models\Graduate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/test', function() {
//     $graduate = Graduate::findOrfail(1);
//     $title='Test title';
//     $content='Test content ttsdsghdkjs as;lkdjalskjdsad alksjdlkasjdlkjsad';
//     return view("email.announcement",['graduate' => $graduate, 'title' => $title, 'content' => $content]);
// });

// Route::get('/view-pdf', function () {
//   return view('pdf');
// });

Route::get('/{any?}',function(){
    return view('welcome');
})->where('any','.*');
