<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehiculeRequest;
use App\Http\Requests\UpdateVehiculeRequest;
use App\Models\Alternateur;
use App\Models\Batterie;
use App\Models\Demarreur;
use App\Models\Injecteur;
use App\Models\Moteur;
use App\Models\PompeInjection;
use App\Models\Vehicule;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VehiculeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $vehicules = Vehicule::with(['moteur', 'alternateur', 'batterie', 'demarreur', 'injecteur', 'pompeInjection'])->get();
        return Inertia::render('Bus/Index',compact('vehicules'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $openMethod = 'create';
        $bus = new Vehicule;
        $bus->numChassis = '';
        $bus->immatriculation = '';
        $bus->capaciteRadiateur = 0;
        $bus->nombrePlaces = 0;
        $bus->etatBus = 'circulation';
        $bus->moteur = new Moteur(['numSerie'=> '', 'marque'=> '', 'modele'=>'', 'type'=>'', 'puissance'=>0, 'couple'=>0]);
        $bus->batterie = new Batterie(['numSerie'=>'','description'=>'', 'tension'=>0, 'intensite'=>0.0, 'puissance'=>0.0]);
        $bus->demarreur = new Demarreur(['numSerie'=> '', 'nom'=>'', 'type'=>0, 'voltage'=>0]);
        $bus->injecteur = new Injecteur(['numSerie'=> '','description'=>'','type'=>'', 'tarage'=>'' ]);
        $bus->alternateur = new Alternateur(['numSerie'=> '', 'nom'=>'', 'type'=>'', 'voltage'=>'']);
        $bus->pompeInjection = new PompeInjection(['numSerie'=> '', 'nom'=>'', 'type'=>'', 'debit'=>0]);

        $pageParams = [$bus, $openMethod];
        return Inertia::render('Bus/BusForm',compact('pageParams'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreVehiculeRequest  $request
     */
    public function store(StoreVehiculeRequest $request)
    {
//        dd($request->all("moteur"));
        DB::transaction(function () use ($request) {
            $vehicule = Vehicule::create(
                [
                    'numChassis'=>$request->validated()['numChassis'],
                    'immatriculation'=>$request->validated()['immatriculation'],
                    'capaciteRadiateur'=>$request->all()['capaciteRadiateur'],
                    'nombrePlaces'=>$request->all()['nombrePlaces']
                ]
            );

            $vehicule->moteur()->create($request->all()['moteur']);
            $vehicule->batterie()->create($request->all()['batterie']);
            $vehicule->alternateur()->create($request->all()['alternateur']);
            $vehicule->demarreur()->create($request->all()['demarreur']);
            $vehicule->injecteur()->create($request->all()['injecteur']);
            $vehicule->pompeInjection()->create($request->all()['pompeInjection']);
        });

        return \redirect(route('vehicule.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vehicule  $vehicule
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicule $vehicule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vehicule  $vehicule
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicule $vehicule)
    {
        $vh = Vehicule::with(["moteur","batterie","demarreur","injecteur","alternateur"])->findOrFail($vehicule->id);
        $pinj = PompeInjection::where("vehicule_id",$vh->id)->first();
        $vh->pompeInjection = $pinj;
        //dd($pinj);
        $openMethod = "update";
        $pageParams = [
          $vh,
          $openMethod
        ];
        return Inertia::render('Bus/BusForm',compact('pageParams'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVehiculeRequest  $request
     * @param  \App\Models\Vehicule  $vehicule
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(UpdateVehiculeRequest $request, Vehicule $vehicule): \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
    {
//        dd($request->all(['pompeInjection']));
        DB::transaction(function () use ($vehicule, $request){
            $vehicule->update([
                'numChassis'=>$request->validated()['numChassis'],
                'immatriculation'=>$request->validated()['immatriculation'],
                'capaciteRadiateur'=>$request->all()['capaciteRadiateur'],
                'nombrePlaces'=>$request->all()['nombrePlaces']
            ]);
            $vehicule->moteur()->update($request->all()['moteur']);
            $vehicule->batterie()->update($request->all()['batterie']);
            $vehicule->alternateur()->update($request->all()['alternateur']);
            $vehicule->demarreur()->update($request->all()['demarreur']);
            $vehicule->injecteur()->update($request->all()['injecteur']);
            $vehicule->pompeInjection()->update($request->all()['pompeInjection']);
        });
        return \redirect(route('vehicule.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vehicule  $vehicule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicule $vehicule)
    {
        //
    }
}
