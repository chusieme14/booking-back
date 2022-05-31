<?php

namespace Database\Seeders;

use App\Models\Designation;
use App\Models\Service;
use Illuminate\Database\Seeder;

class DesignationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $designations = [
            'Registrar Head',
            'Admin Aide',
            'Support Staff/JO',
        ];

        foreach ($designations as $key => $designation) {
            Designation::create([
                'name' => $designation
            ]);
        }
    }
}
