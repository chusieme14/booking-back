<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];
    protected $appends = ['fullname'];
    protected $hidden = ['password'];

    public function getFullNameAttribute(){
        return ucfirst($this->first_name). ' '. ucfirst($this->last_name);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
