<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = [
        'suggestion',
        'star_number',
        'booking_id',
    ];

    public function booking()
    {
       return $this->belongsTo(Booking::class);
    }
}
