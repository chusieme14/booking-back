<?php

namespace Database\Seeders;

use App\Models\Staff;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Staff::create([
            'first_name' => 'test',
            'last_name' => 'admin',
            'username' => 'test@admin.com',
            'password' => '$2y$10$L.gDZljq.Po8Qm82bh5e6usGncbIqSMhd1MIsDbikPvMfc3o8YKWS',
        ]);
    }
}
