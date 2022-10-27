<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home');
    }

    //    Dummies
    public function calendar(){
        return Inertia::render('Calendar');
    }
    public function colorPicker(){
        return Inertia::render('ColorPicker');
    }
    public function customer(){
        return Inertia::render('Customer');
    }
    public function ecommerce(){
        return Inertia::render('Ecommerce');
    }
    public function editor(){
        return Inertia::render('Editor');
    }
    public function employee(){
        return Inertia::render('Employee');
    }
    public function kanban(){
        return Inertia::render('Kanban');
    }
    public function orders(){
        return Inertia::render('Orders');
    }
    public function area(){
        return Inertia::render('Charts/Area');
    }
    public function bar(){
        return Inertia::render('Charts/Bar');
    }
    public function colorMapping(){
        return Inertia::render('Charts/ColorMapping');
    }
    public function financial(){
        return Inertia::render('Charts/Financial');
    }
    public function line(){
        return Inertia::render('Charts/Line');
    }
    public function pie(){
        return Inertia::render('Charts/Pie');
    }
    public function pyramid(){
        return Inertia::render('Charts/Pyramid');
    }
    public function stacker(){
        return Inertia::render('Charts/Stacked');
    }
    public function setDashParam(Request $request){
        $oldConfig = Inertia::getShared('dashParams');
        return Inertia::share(['dashParams' => function () use ($oldConfig) {
            return array_merge($oldConfig(), ['Activemenu' => false]);
        }]);
        
    }


//    App Pararams
    public function budMakes(){
        return Inertia::render('BusMake');
    }
    public function busModels(){
        return Inertia::render('BusModel');
    }
    public function bus(){
        return Inertia::render('Bus');
    }
    public function specialities(){
        return Inertia::render('Speciality');
    }
    public function technicians(){
        return Inertia::render('Technician');
    }
    public function budDrivers(){
        return Inertia::render('BusDriver');
    }
    public function spareParts(){
        return Inertia::render('SparePart');
    }
    public function vendors(){
        return Inertia::render('Vendor');
    }
    public function externalProvider(){
        return Inertia::render('ExternalProvider');
    }

//    Activities
    public function troubleshooting(){
        return Inertia::render('Troubleshooting');
    }
    public function workRequest(){
        return Inertia::render('WorkRequest');
    }
    public function workOrder(){
        return Inertia::render('WorkOrder');
    }
    public function maintenanceReport(){
        return Inertia::render('MaintenanceReport');
    }
    public function procurement(){
        return Inertia::render('Procurement');
    }
    public function intake(){
        return Inertia::render('Intake');
    }
}
