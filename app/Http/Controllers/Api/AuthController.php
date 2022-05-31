<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $graduate = Client::where('email', $request->email)->where('is_verified', 1)->first();
        if(!$graduate){
            $graduate = Client::where('student_number', $request->email)->where('is_verified', 1)->first();
            if(!$graduate) return response()->json(['message'=>'incorrect data'], 404);
        }
        if (!Hash::check($request->password, $graduate->password)) {
            return response()->json(['message'=>'incorrect data'], 404);
        }
        $tokenResult = $graduate->createToken('Personal Access Token');

        return response()->json([
            'id' => $graduate->id,
            'access_token' => $tokenResult->accessToken
        ]);

    }

    public function details()
    {
        return Client::findOrfail(auth()->guard('api')->user()->id);
    }

    public function logout(Request $request){

        auth()->guard('api')->user()->token()->revoke();

        return response()->json(['Success'], 200);
    }

    public function register(Request $request){
        $graduate = Client::create($request->all());
        $graduate->update([
            'password' => Hash::make($request->new_password)
        ]);
    }

    public function forgotPassword(Request $request)
    {
        return Client::where(['student_number'=>$request->student_number, 'email'=>$request->email])->exists();
    }

    public function changePassword(Request $request)
    {
        return Client::where(['student_number'=>$request->student_number, 'email'=>$request->email])
            ->update(['password'=>Hash::make($request->password)]);
    }
}
