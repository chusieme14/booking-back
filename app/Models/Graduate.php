<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Graduate extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'first_name', 'last_name', 'middle_name', 'student_number',
        'email', 'password', 'avatar', 'batch', 'section',
        'course_id', 'contact_number', 'share_code'
    ];

    protected $with = ['course', 'detail'];

    protected $appends = ['fullname'];

    public function getFullNameAttribute(){
        return ucfirst($this->first_name). ' ' .ucfirst($this->middle_name). ' '. ucfirst($this->last_name);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }

    public function detail(){
        return $this->hasOne(GraduateDetail::class);
    }

    public function points(){
        return $this->hasMany(GraduatePoint::class);
    }

    public function empHistory(){
        return $this->hasMany(EmploymentHistory::class);
    }

}
