<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id','requirement_id', 'image_path'
    ];

    protected $with = ['requirement'];

    public function booking(){
        return $this->belongsTo(Booking::class);
    }

    public function requirement(){
        return $this->belongsTo(Requirement::class);
    }
}
