<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Requirements;
use App\Http\Controllers\Controller;
use App\Models\Requirement;
use Illuminate\Http\Request;

class RequirementController extends Controller
{
    public function index()
    {
        return (new Requirements)->searchable();
    }

    public function store(Request $request)
    {
        $service = Requirement::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $service = Requirement::where('id', $id)->first();
        $service->update($request->all());
    }

    public function destroy($id)
    {
        $service = Requirement::where('id', $id)->first();
        $service->services()->sync([]);
        $service->delete();
    }
}
