<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $requirements = [
            'Adding, Dropping, Changing and Withdrawal',
            'Application for Graduation',
            'Application for Leave of Absence',
            'Authentication of Documents',
            'Certificate of English as Medium of Instruction',
            'Certificate of Grades',
            'Certificate of Registration',
            'Certificates of Units Earned',
            'Completion of Grades (INC)',
            'Correction of Grades',
            'Correction of Name',
            'Crediting of Grades',
            'Diploma',
            'Evaluation of Transferees/Shiftee',
            'Form 137',
            'Honorable Dismissal',
            'Official Transcript of Records',
            'Request for CAV',
        ];

        foreach ($requirements as $key => $requirement) {
            Service::create([
                'name' => $requirement
            ]);
        }
    }
}
