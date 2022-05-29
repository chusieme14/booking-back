<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SearchFilterHelpers\HNews;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all(){
        return (new HNews)->searchable();
    }
}
