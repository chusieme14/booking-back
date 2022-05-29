<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function saveBooking(Request $request)
    {
       $booking = Booking::create($request->all());
       $booking->update(['date_requested'=>Carbon::now()]);
    }

    public function viewAppointments($id)
    {
        // whereIn('status',[1,2])->
        return Booking::where('client_id', $id)->orderBy('created_at', 'desc')->get();
    }
}
