<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicule>
 */
class VehiculeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'numChassis'=> fake()->unique()->md5(),
            'immatriculation'=> fake()->randomElement(['CE','LT'])
                .'-'.fake()->unique()->numerify().'-'.fake()->regexify('[A-Z]{2}'),
            'nombrePlaces' => fake()->randomElement([55,70],)
        ];
    }
}
