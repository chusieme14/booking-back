<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'time',
        'status',
        'date_accepted',
        'date_completed',
        'staff_id',
        'client_id',
        'service_id',
    ];

    const ACTIVE = 1;
    const WAITING = 1;
    const DONE = 3;
}
