<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SearchFilterHelpers\Countries;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function all()
    {
        return (new Countries)->searchable();
    }
}
