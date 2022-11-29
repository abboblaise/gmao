<?php

namespace Database\Seeders;

use App\Models\BusMake;
use App\Models\BusModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $makes = BusMake::all();
        BusModel::factory(35)->make()->each(function($model) use ($makes) {
           $model->bus_make_id = $makes->random()->id;
           $model->save();
        });
    }
}
