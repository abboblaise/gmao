<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehiculeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'numChassis'=>'required|unique:vehicules',
            'immatriculation'=>'required|unique:vehicules',
            'alternateur.numSerie' => 'required|unique:alternateurs,numSerie',
            'alternateur.nom' => 'required',
            'batterie.numSerie' => 'required|unique:batteries,numSerie',
            'batterie.description' => 'required',
            'moteur.numSerie' => 'required|unique:moteurs,numSerie',
            'injecteur.numSerie' => 'required|unique:injecteurs,numSerie',
            'injecteur.description' => 'required',
            'demarreur.numSerie' => 'required|unique:demarreurs,numSerie',
            'demarreur.nom' =>'required',
            'pompeInjection.numSerie' => 'required|unique:pompe_injections,numSerie',
            'pompeInjection.nom' => 'required',
        ];
    }
}
