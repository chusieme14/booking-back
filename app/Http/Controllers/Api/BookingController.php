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
        if(Booking::where('client_id', $request->client_id)->whereDoesntHave('rating')->exists()){
            return response()->json(['message'=>'please rate your previous appointment']);
        }
        $booking = Booking::create($request->all());
        $booking->update(['date_requested'=>Carbon::now()]);
    }

    public function viewAppointments($id)
    {
        // whereIn('status',[1,2])->
        return Booking::where('client_id', $id)->orderBy('created_at', 'desc')->get();
    }

    public function rateBooking(Request $request, $id)
    {
        $booking = Booking::where('id', $id)->first();
        $booking->rating()->create([
            'star_number' => $request->star,
            'suggestion' => $request->suggestion,
        ]);
    }
}
