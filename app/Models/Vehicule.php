<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    use HasFactory;

    protected $guarded = [];

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
    public function alternateur(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Alternateur::class);
    }
    public function pompeInjection(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(PompeInjection::class);
    }
}
