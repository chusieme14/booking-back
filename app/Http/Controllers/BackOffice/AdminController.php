<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Admins;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        return (new Admins)->searchable();
    }

    public function store(Request $request)
    {
        Admin::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'department_id' => $request->department_id,
        ]);
    }

    public function update(Request $request, $id)
    {
        $admin = Admin::where('id', $id)->first();
        $admin->first_name = $request->first_name;
        $admin->last_name = $request->last_name;
        $admin->email = $request->email;
        if($request->password){
            $admin->password = Hash::make($request->password);
        }
        $admin->department_id = $request->department_id;
        $admin->save();
    }

    public function destroy($id)
    {
        Admin::findOrfail($id)->delete();
    }

    public function checkEmail()
    {
        if(Request()->id){
            return Admin::where('email', Request()->email)->where('id', '!=', Request()->id)->first();
        }else{
            return Admin::where('email', Request()->email)->first();
        }
    }
}
