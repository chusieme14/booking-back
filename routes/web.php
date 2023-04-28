<?php

use App\Models\Booking;
use App\Models\Graduate;
use App\Models\Rating;
use App\Models\Service;
use Carbon\Carbon;
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

Route::get('/print-transaction-report', function () {
    $services = Service::withCount(['bookings'=>function($q){
        $q->whereMonth('date_accepted', Carbon::now()->month)->where('status', Booking::DONE);
    }])->whereHas('bookings', function($q){
        $q->whereMonth('date_accepted', Carbon::now()->month)->where('status', Booking::DONE);
    })->get();
    $services = $services->toArray();
    array_multisort(array_column($services, 'bookings_count'), SORT_DESC, $services);

    $logoPath = public_path('sample/logo.png');
    $logobase64 = 'data:image/jpeg;base64,' . base64_encode(file_get_contents($logoPath));

    $ratings = Rating::whereHas('booking', function($q){
        $q->whereMonth('date_accepted', Carbon::now()->month)->where('status', Booking::DONE);
    })->get()->groupBy('type');
    $waiting_rate = number_format($ratings[1]->sum('star_number')/sizeof($ratings[1]), 2, '.');
    $service_rate = number_format($ratings[2]->sum('star_number')/sizeof($ratings[2]), 2, '.');
    $staff_rate = number_format($ratings[3]->sum('star_number')/sizeof($ratings[3]), 2, '.');
    $overall_rate = number_format(($waiting_rate + $service_rate + $staff_rate) / 3, 2, '.');
    $suggestions = [];
    foreach ($ratings[1] as $key => $rate) {
        if($key > 2) break;
        array_push($suggestions, $rate['suggestion']);
    }
    $pdf_data = [
        'logo' => $logobase64,
        'services' => $services,
        'waiting_rate' => $waiting_rate,
        'waiting_legend' => checkLegend($waiting_rate),
        'service_rate' => $service_rate,
        'service_legend' => checkLegend($service_rate),
        'staff_rate' => $staff_rate,
        'staff_legend' => checkLegend($staff_rate),
        'overall_rate' => $overall_rate,
        'overall_legend' => checkLegend($overall_rate),
        'suggestions' => $suggestions,
        'year' => Carbon::now()->year,
        'month' => Carbon::createFromDate(null, 4, null)->format('F'),
        'total_suggestion' => sizeof($ratings[1]),
    ];
    $pdf = PDF::loadView('pdf_template.transaction', ['pdf_data' => $pdf_data]);

    return $pdf->stream('trasaction.pdf');
});

Route::get('/{any?}',function(){
    return view('welcome');
})->where('any','.*');
