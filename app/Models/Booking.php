<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'date_requested',
        'date_accepted',
        'date_completed',
        'declined_reason',
        'staff_id',
        'client_id',
        'service_id',
    ];

    protected $with = [
        'service','client','rating','staff'
    ];

    public function service(){
        return $this->belongsTo(Service::class);
    }

    public function client(){
        return $this->belongsTo(Client::class);
    }

    public function staff(){
        return $this->belongsTo(Staff::class);
    }

    public function rating(){
        return $this->hasOne(Rating::class);
    }

    const WAITING = 1;
    const Accepted = 2;
    const DONE = 3;
    const Declined = 4;
}
