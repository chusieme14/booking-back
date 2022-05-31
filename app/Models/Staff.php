<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Staff extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'staffs';

    protected $fillable = [
        'employeeID',
        'last_name',
        'first_name',
        'middle_name',
        'username',
        'password',
        'designation_id',
    ];

    protected $with=['designation', 'services'];

    protected $appends = ['fullname'];

    public function getFullNameAttribute(){
        return ucfirst($this->last_name) . ' '.ucfirst($this->middle_name).' '. ucfirst($this->first_name);
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class);
    }
}
