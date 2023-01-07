<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alternateur>
 */
class AlternateurFactory extends Factory
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
            'nom' => fake()->words(3,true),
            'voltage' => fake()->randomElement([6,12,24]),
        ];
    }
}
