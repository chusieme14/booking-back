<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::create([
            'student_number' => '12-00051',
            'first_name' => 'test user',
            'last_name' => 'test last',
            'email' => 'test@user.com',
            'phone' => '0926154778543',
            'password' => '$2y$10$L.gDZljq.Po8Qm82bh5e6usGncbIqSMhd1MIsDbikPvMfc3o8YKWS',
        ]);
    }
}
