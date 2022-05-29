<?php

namespace App\Services;

use App\Jobs\SendSms;

class Sms{
    public function send($number, $message){
        SendSms::dispatch($number, $message)->delay(now()->addSeconds(5));
    }
}