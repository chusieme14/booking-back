<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Services;
use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return (new Services)->searchable();
    }

    public function store(Request $request)
    {
        $service = Service::create($request->all());
        $service->requirements()->attach($request->requirement_ids);
    }

    public function update(Request $request, $id)
    {
        $service = Service::where('id', $id)->first();
        $service->requirements()->sync([]);
        $service->requirements()->attach($request->requirement_ids);
        $service->update($request->all());
    }

    public function destroy($id)
    {
        $service = Service::where('id', $id)->first();
        $service->requirements()->sync([]);
        $service->delete();
    }
}
