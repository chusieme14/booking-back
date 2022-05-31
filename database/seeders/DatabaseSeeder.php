<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(StaffSeeder::class);
        $this->call(ClientSeeder::class);
        $this->call(RequirementSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(DesignationSeeder::class);
    }
}
