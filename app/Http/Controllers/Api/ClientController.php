<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function update(Request $request, $id)
    {
        $client = Client::findOrfail($id);
        $client->update($request->all());
    }

    public function show($id)
    {
        return Client::findOrfail($id);
    }
}
