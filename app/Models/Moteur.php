<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Moteur extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function vehicule(){
        return $this->belongsTo(Vehicule::class);
    }
}
