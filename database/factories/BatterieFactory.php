<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Batterie>
 */
class BatterieFactory extends Factory
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
            'description' => fake()->words(3,true),
            'tension'=> fake()->randomElement([6,12,24]),
            'intensite'=> fake()->randomElement([1,2,3,4,5]),
        ];
    }
}
