<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\Courses;

class CourseController extends Controller
{
    public function all(){
        return (new Courses)->searchable();
    }
}
