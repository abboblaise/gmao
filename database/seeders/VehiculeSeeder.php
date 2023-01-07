<?php

namespace Database\Seeders;

use App\Models\Alternateur;
use App\Models\Batterie;
use App\Models\Demarreur;
use App\Models\Injecteur;
use App\Models\Moteur;
use App\Models\PompeInjection;
use App\Models\Vehicule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehiculeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vehicule::factory(20)->create()->each(function($vehicule) {
            $vehicule->alternateur()->save(ALternateur::factory(1)->make()->first());
            $vehicule->batterie()->save(Batterie::factory(1)->make()->first());
            $vehicule->demarreur()->save(Demarreur::factory(1)->make()->first());
            $vehicule->injecteur()->save(Injecteur::factory(1)->make()->first());
            $vehicule->moteur()->save(Moteur::factory(1)->make()->first());
            $vehicule->pompeInjection()->save(PompeInjection::factory(1)->make()->first());
            $vehicule->save();
        });
    }
}
