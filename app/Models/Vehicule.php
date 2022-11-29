<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    use HasFactory;

    public function moteur()
    {
        return $this->hasOne(Moteur::class);
    }
    public function batterie()
    {
        return $this->hasOne(Batterie::class);
    }
    public function demarreur()
    {
        return $this->hasOne(Demarreur::class);
    }
    public function injecteur()
    {
        return $this->hasOne(Injecteur::class);
    }
    public function alternateur()
    {
        return $this->hasOne(Alternateur::class);
    }
    public function PompeInjection()
    {
        return $this->hasOne(PompeInjection::class);
    }
}
