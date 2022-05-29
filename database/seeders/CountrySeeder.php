<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::truncate();

        $json = file_get_contents("database/seeders/countries.json");
        $countries = json_decode($json);

        foreach ($countries as $key => $value) {
            Country::create([
                "name" => $value->name,
                "short_name" => $value->code,
            ]);
        }

    }
}
