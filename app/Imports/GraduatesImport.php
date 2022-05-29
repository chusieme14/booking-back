<?php

namespace App\Imports;

use App\Helpers\SearchFilterHelpers\Graduates;
use App\Models\Course;
use App\Models\Graduate;
use App\Models\tempGraduate;
// use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class GraduatesImport implements ToCollection, WithStartRow
{
    protected $session = null;

    public function __construct($session)
    {
        $this->session = $session;
    }

    use Importable;
    /**
    * @param Collection $collection
    */
    public function startRow(): int
    {
        return 2;
    }
    public function collection(Collection $rows)
    {
        
        foreach ($rows as $key => $row) {

            $check_status = $this->validateRow($row);
            if($row[8]){
                $course = Course::where('name', 'like', '%'.$row[8].'%')->orWhere('code', strtoupper($row[8]))->first();
            }
            tempGraduate::create([
                'student_number'=> $row[0],
                'first_name'=> $row[1],
                'last_name'=> $row[2],
                'middle_name'=> $row[3],
                'email'=> $row[4],
                'contact_number'=> $row[5],
                'batch'=> $row[6],
                'section'=> $row[7],
                'course'=> $row[8],
                'course_id'=> $course?$course->id:null,
                'status' => $check_status['is_valid'] ? 1 : 0,
                'reason' => $check_status['messages'],
                'session' => $this->session,
            ]);
        }

    }

    private function validateRow($row){

        $validations = [
            'is_valid' => true,
            'messages' => ''
        ];

        if(Graduate::where('email', $row[4])->exists()){
            $validations['is_valid'] = false;
            $validations['messages'] = "Email already exist";
        }
        if(Graduate::where('student_number', $row[0])->exists() || !$row[0]){
            $validations['is_valid'] = false;
            $validations['messages'] = $row[0] ? "Student number already exist" : "Student number can't be empty";
        }
        if(!$row[1]){
            $validations['is_valid'] = false;
            $validations['messages'] = "First name can't be empty";
        }
        if(!$row[2]){
            $validations['is_valid'] = false;
            $validations['messages'] = "Last name can't be empty";
        }
        if(!$row[6]){
            $validations['is_valid'] = false;
            $validations['messages'] = "Batch can't be empty";
        }
        if(!$row[7]){
            $validations['is_valid'] = false;
            $validations['messages'] = "Section can't be empty";
        }
        if(!$row[8]){
            $validations['is_valid'] = false;
            $validations['messages'] = "Course can't be empty";
        }
        if(!Course::where('name', 'like','%'.$row[8].'%')->orWhere('code', 'like','%'.$row[8].'%')->exists()){
            $validations['is_valid'] = false;
            $validations['messages'] = "Course not found";
        }

        return $validations;
    }
}
