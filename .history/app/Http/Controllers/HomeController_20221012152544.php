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
        return Inertia::render('Area');
    }
    public function bar(){
        return Inertia::render('Bar');
    }
    public function colorMapping(){
        return Inertia::render('ColorMapping');
    }
    public function financial(){
        return Inertia::render('Financial');
    }
    public function line(){
        return Inertia::render('Line');
    }
    public function pie(){
        return Inertia::render('Pie');
    }
    public function pyramid(){
        return Inertia::render('Pyramid');
    }
    public function stacker(){
        return Inertia::render('Stacker');
    }


//    App Pararams
    public function budMakes(){
        return Inertia::render('Index');
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
