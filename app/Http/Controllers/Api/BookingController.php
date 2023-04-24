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
        foreach ($request->service_ids as $service) {
            $booking = Booking::create([
                'date_requested' => Carbon::now(),
                'client_id' => $request->client_id,
                'service_id' => $service,
            ]);
            foreach ($request->documents as $document) {
                if($booking->service_id == $document['service_id']){
                    $booking->documents()->create([
                        'requirement_id' => $document['requirement_id'],
                        'image_path' => userProfileUploader($document['image_base64'], 'documents/', $document['requirement_id'], $booking->id)
                    ]);
                }
            }
        }
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
            'type' => 1
        ]);
        $booking->rating()->create([
            'star_number' => $request->star1,
            'type' => 2
        ]);
        $booking->rating()->create([
            'star_number' => $request->star2,
            'type' => 3
        ]);
        $booking->update([
            'status' => Booking::Rated
        ]);
    }
}
