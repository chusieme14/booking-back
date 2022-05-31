<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

    public function updatePassword(Request $request, $id)
    {
        $graduate = Client::findOrfail($id);
        if(!Hash::check($request->old_password, $graduate->password)){
            return response()->json(['message'=>'Old password not match'],404);
        }
        $graduate->update([
            'password' => Hash::make($request->new_password)
        ]);
    }
}
