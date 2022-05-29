<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Client extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'student_number',
        'first_name',
        'last_name',
        'middle_name',
        'email',
        'phone',
        'password',
    ];

    protected $appends = ['fullname'];

    public function getFullNameAttribute(){
        return ucfirst($this->last_name) . ' '.ucfirst($this->middle_name).' '. ucfirst($this->first_name);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
