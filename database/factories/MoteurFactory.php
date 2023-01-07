<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Moteur>
 */
class MoteurFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'numSerie' => fake()->unique()->md5(),
            'marque' => fake()->randomElement(['Mercedez', 'Mitsubishi','Toyota','Hyunday','Honda','Suzuki','BMW']),
            'modele' => fake()->randomElement(['V6','V8','V12']),
            'puissance'=> fake()->randomElement([350,400,500,550]),
            'couple'=> fake()->randomElement([420,480,530,550,580,600]),
        ];
    }
}
