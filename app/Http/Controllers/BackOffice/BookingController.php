<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Bookings;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return (new Bookings)->searchable();
    }

    public function store(Request $request)
    {
        
    }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        
    }
}
