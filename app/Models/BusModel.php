<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusModel extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $fillable =['name','year'];
    public function BusMake() {
        return $this->belongsTo('App\Models\BusMake');
    }
    public function vehicule(){
        return $this->belongsTo(Vehicule::class);
    }
}
