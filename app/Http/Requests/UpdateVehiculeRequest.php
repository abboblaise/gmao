<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehiculeRequest extends FormRequest
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
            'numChassis'=>'required',
            'immatriculation'=>'required',
            'alternateur.numSerie' => 'required',
            'alternateur.nom' => 'required',
            'batterie.numSerie' => 'required',
            'batterie.description' => 'required',
            'moteur.numSerie' => 'required',
            'injecteur.numSerie' => 'required',
            'injecteur.description' => 'required',
            'demarreur.numSerie' => 'required',
            'demarreur.nom' =>'required',
            'pompeInjection.numSerie' => 'required',
            'pompeInjection.nom' => 'required',
        ];
    }
}
