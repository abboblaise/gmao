<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Injecteur extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function vehicule(){
        return $this->belongsTo(Vehicule::class);
    }
}
