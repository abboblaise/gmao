<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorebusMakeRequest;
use App\Http\Requests\UpdatebusMakeRequest;
use App\Models\BusMake;
use App\Models\BusModel;
use Inertia\Inertia;

class BusMakeController extends Controller
{

    public function index()
    {
        $makes = BusMake::with('models')->orderBy('created_at', 'desc')->get();
        return Inertia::render('BusMake/Index.jsx',compact('makes'));
    }


    public function create()
    {
        $openMethod = 'create';
        $make = new BusMake();
        $make->name = '';
        $make->models = [];
        $pageParams = [
            $make,
            $openMethod
        ];
        return Inertia::render('BusMake/MakeForm', compact('pageParams'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorebusMakeRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StorebusMakeRequest $request)
    {
        $models = collect([]);//$request->validated()['models'];
        foreach ($request->validated()['models'] as $model) {
            $mod = new BusModel();
            $mod->name = $model;
            $models->push($mod);
        };
        $busMake = BusMake::create(
            $request->validated()
        );

        $busMake->modelS()->saveMany($models);

        return \redirect(route('bus-make.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\busMake  $busMake
     * @return \Illuminate\Http\Response
     */
    public function show(busMake $busMake)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BusMake  $busMake
     * @return \Illuminate\Http\Response
     */
    public function edit(BusMake $busMake)
    {
        $models = BusModel::where('bus_make_id', $busMake->id)->get();
        $mods = collect([]);
        $models->each(function ($model) use ($mods) {
            $mods->push($model->name);
        });
        $busMake->models = $mods;
        $openMethod = 'update';
        $pageParams = [
            $busMake,
            $openMethod
        ];
        return Inertia::render('BusMake/MakeForm', compact('pageParams'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatebusMakeRequest  $request
     * @param  \App\Models\busMake  $busMake
     */
    public function update(UpdatebusMakeRequest $request, busMake $busMake)
    {
        $models = collect([]);//$request->validated()['models'];
//        dd($request->validated());
        foreach ($request->validated()['models'] as $model) {
            $mod = new BusModel();
            $mod->name = $model;
            $models->push($mod);
        };
        $make = BusMake::findOrFail($busMake->id);
        $make->models()->delete();
        $make->update($request->validated());
        $make->models()->saveMany($models);
        return \redirect(route('bus-make.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\busMake  $busMake
     * @return \Illuminate\Http\Response
     */
    public function destroy(busMake $busMake)
    {
        //
    }
}
