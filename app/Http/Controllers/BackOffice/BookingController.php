<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Bookings;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return (new Bookings)->searchable();
    }

    public function acceptBooking(Request $request, $id)
    {
        Booking::where('id', $id)->update([
            'status' => 2,
            'date_accepted' => Carbon::parse($request->date.' '.$request->time),
            'staff_id' => auth()->guard('web')->user()->id,
        ]);
    }

    public function doneBooking(Request $request, $id)
    {
        Booking::where('id', $id)->update([
            'status' => 3,
            'date_completed' => Carbon::now(),
        ]);
    }

    public function declineBooking(Request $request, $id)
    {
        Booking::where('id', $id)->update([
            'status' => 4,
            'declined_reason' => $request->declined_reason,
        ]);
    }
}
