<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

    function userProfileUploader($file, $path, $reqs_id, $id)
    {
        $folder = public_path($path);
        
        if (empty($file)) return '';
        
        if (!file_exists($folder)) {
            mkdir($folder, 0777, true);
        }
        
        $name = time().''.$reqs_id.''.$id.'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
        $success = Image::make($file)
            ->save($folder.$name);

        if ($success) return '/'.$path.$name;
        return null;
    }

    function removeFile($path){
        $path = public_path($path);
        File::delete($path);
    }

    function storeImageFile($file, $path,$dir,&$result)
    {
        if (empty($file)) return '';
        if (!file_exists(storage_path('app/public/'.$path.'/'.$dir))) {
            mkdir(storage_path('app/public/'.$path.'/'.$dir), 0777, true);
        }
        
        $name = time().'_'.$file->getClientOriginalName();
        $ext = $file->getClientOriginalExtension();
        $name = $name.'.'.$ext;
        $image_path = 'public/'.$path.'/'.$dir.'/'.$name;

        $status =Storage::put($image_path, $file);

        if ($status) $result = $name;
    }

    // function formatBytes($size, $precision = 2)
    // {
    //     $base = log($size, 1024);
    //     $suffixes = array('Bytes', 'KB', 'MB', 'GB', 'TB');

    //     return round(pow(1024, $base - floor($base)), $precision) .' '. $suffixes[floor($base)];
    // }

    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
?>