<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EmploymentHistory;
use App\Models\Graduate;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class GraduateController extends Controller
{
    public function updateInfo(Request $request, $id){

        $graduate = Graduate::where('id', $id)->first();
        $graduate->update($request->all());
        if($graduate->detail){
            $graduate->detail->update($request->detail);
            if($request->detail['company_name']){
                $history = EmploymentHistory::where('graduate_id', $id)->orderBy('created_at', 'desc')->first();
                if($history->company_name != $request->detail['company_name']){
                    $graduate->empHistory()->create($request->detail);
                }
            }
        }else{
            $graduate->detail()->create($request->detail);
            if($request->detail['company_name']){
                $graduate->empHistory()->create($request->detail);
            }
        }
        if($request->code){
            if($graduate->share_code != $request->code){
                $this->generatePoints($graduate, $request->code);
            }
        }
        return response()->json(['message' => 'success'], 200);
    }

    private function generatePoints($graduate, $code){
        $sharer = Graduate::where('share_code', $code)->first();
        $enableDate = Carbon::parse($graduate->updated_at)->addWeek(1);
        $pointable = false;
        if($graduate->detail){
            $enableDetailDate = Carbon::parse($graduate->detail->updated_at)->addWeek(1);
            if($enableDate <= Carbon::now() || $enableDetailDate <= Carbon::now()){
                $pointable = true;
            }else if(Carbon::parse($graduate->detail->updated_at) == Carbon::parse($graduate->detail->created_at)){
                $pointable = true;
            }
        }else{
            if($enableDate <= Carbon::now()){
                $pointable = true;
            }else if(Carbon::parse($graduate->updated_at) == Carbon::parse($graduate->created_at)){
                $pointable = true;
            }
        }

        if($pointable){
            $sharer->points()->create([
                'point' => 30
            ]);
        }

    }

    public function updateProfile(Request $request, $id)
    {
        $graduate = Graduate::findOrfail($id);
        if($graduate->avatar){
            removeFile($graduate->avatar);
        }
        $graduate->update([
            'avatar' => userProfileUploader($request->image_base64, 'profile/')
        ]);
    }

    public function updatePassword(Request $request, $id)
    {
        $graduate = Graduate::findOrfail($id);
        if(!Hash::check($request->old_password, $graduate->password)){
            return response()->json(['message'=>'Old password not match'],404);
        }
        $graduate->update([
            'password' => Hash::make($request->new_password)
        ]);
    }
}
