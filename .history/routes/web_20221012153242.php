<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\HomeController::class,"ecommerce"])->name("home.index");

//Params
Route::get('/bus-make', [\App\Http\Controllers\HomeController::class,"budMakes"])->name("make.index");
Route::get('/bus-model', [\App\Http\Controllers\HomeController::class,"busModels"])->name("model.index");
Route::get('/bus', [\App\Http\Controllers\HomeController::class,"bus"])->name("bus.index");
Route::get('/speciality', [\App\Http\Controllers\HomeController::class,"specialities"])->name("speciality.index");
Route::get('/technician', [\App\Http\Controllers\HomeController::class,"technicians"])->name("technician.index");
Route::get('/driver', [\App\Http\Controllers\HomeController::class,"budDrivers"])->name("driver.index");
Route::get('/vendor', [\App\Http\Controllers\HomeController::class,"vendors"])->name("vendor.index");
Route::get('/spare-part', [\App\Http\Controllers\HomeController::class,"spareParts"])->name("spare.index");
Route::get('/provider', [\App\Http\Controllers\HomeController::class,"externalProvider"])->name("provider.index");

//Activities
Route::get('/troubleshoot', [\App\Http\Controllers\HomeController::class,"troubleshooting"])->name("activity.troubleshoot");
Route::get('/work-request', [\App\Http\Controllers\HomeController::class,"workRequest"])->name("activity.work-request");
Route::get('/work-order', [\App\Http\Controllers\HomeController::class,"workOrder"])->name("activity.work-order");
Route::get('/maintain-report', [\App\Http\Controllers\HomeController::class,"maintenanceReport"])->name("activity.report");
Route::get('/procurement', [\App\Http\Controllers\HomeController::class,"procurement"])->name("activity.procurement");
Route::get('/intake', [\App\Http\Controllers\HomeController::class,"intake"])->name("activity.intake");

//dummies
Route::get('/calendar', [\App\Http\Controllers\HomeController::class,"calendar"])->name("dummy.calendar");
Route::get('/ecommerce', [\App\Http\Controllers\HomeController::class,"ecommerce"])->name("dummy.ecommerce");
Route::get('/color-picker', [\App\Http\Controllers\HomeController::class,"colorPicker"])->name("dummy.color-picker");
Route::get('/customer', [\App\Http\Controllers\HomeController::class,"customer"])->name("dummy.customer");
Route::get('/editor', [\App\Http\Controllers\HomeController::class,"editor"])->name("dummy.editor");
Route::get('/employee', [\App\Http\Controllers\HomeController::class,"employee"])->name("dummy.employee");
Route::get('/kanban', [\App\Http\Controllers\HomeController::class,"kanban"])->name("dummy.kanban");
Route::get('/orders', [\App\Http\Controllers\HomeController::class,"orders"])->name("dummy.orders");
Route::get('/area', [\App\Http\Controllers\HomeController::class,"area"])->name("dummy.area");
Route::get('/bar', [\App\Http\Controllers\HomeController::class,"bar"])->name("dummy.bar");
Route::get('/colo-mapping', [\App\Http\Controllers\HomeController::class,"colorMapping"])->name("dummy.colo-mapping");
Route::get('/financial', [\App\Http\Controllers\HomeController::class,"financial"])->name("dummy.financial");
Route::get('/line', [\App\Http\Controllers\HomeController::class,"line"])->name("dummy.line");
Route::get('/pie', [\App\Http\Controllers\HomeController::class,"pie"])->name("dummy.pie");
Route::get('/pyramid', [\App\Http\Controllers\HomeController::class,"pyramid"])->name("dummy.pyramid");
Route::get('/stacked', [\App\Http\Controllers\HomeController::class,"stacker"])->name("dummy.stacked");
