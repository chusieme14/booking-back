<?php

namespace App\Http\Controllers\BackOffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Staff;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
        // if(!auth()->attempt($data)){
        $staff = Staff::where('username',$data['username'])->first();
        if(!$staff){
            return response(['error_message' => 'Incorrect credentials']);
        }
        $staff->makeVisible(['password']);
        if(!Hash::check($data['password'],$staff->password)){
            return response(['error_message' => 'Incorrect credentials']);
        }
        Auth::login($staff);


        return response()->json('success', 200);
    }

    public function checkUser(Request $request){
        return Auth::check();
    }

    public function logout(Request $request){
        auth()->guard('web')->logout();
        $request->session()->invalidate();

        return "success";
    }

    public function getLoginUser()
    {
        return Auth::User();
    }
}
