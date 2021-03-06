<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price'
    ];

    protected $with = [
        'requirements'
    ];

    public function requirements(){
        return $this->belongsToMany(Requirement::class);
    }

    public function staffs()
    {
        return $this->belongsToMany(Staff::class);
    }
}
