<?php

namespace Database\Seeders;

use App\Models\Requirement;
use Illuminate\Database\Seeder;

class RequirementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $requirements = [
            'Original PSA Birth Cert',
            'Original PSA Marriage Cert',
            'FORM 137',
            'Fully Accomplished Clearance',
            'Photocopy Approval Sheet of Thesis',
            'Barangay Certification for Firs Time Job Seekers',
            'Latest 2x2 ID Picture',
            'Official Transcript of Record',
            'Honorable Dismisal',
        ];

        foreach ($requirements as $key => $requirement) {
            Requirement::create([
                'name' => $requirement
            ]);
        }
    }
}
