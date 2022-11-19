<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PasienController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/patients', [PasienController::class, 'index']);

Route::post('/patients', [PasienController::class, 'store']);

Route::get('/patients/{id}', [PasienController::class, 'show']);

Route::put('/patients/{id}', [PasienController::class, 'update']);

Route::delete('/patients/{id}', [PasienController::class, 'destroy']);

Route::get('/patients/search/{name}', [PasienController::class, 'search']);

// Route::get('/patients/status/{status}', [PasienController::class, 'status']);

Route::get('/patients/status/positive', [PasienController::class, 'positive']);

Route::get('/patients/status/recovered', [PasienController::class, 'recovered']);

Route::get('/patients/status/dead', [PasienController::class, 'dead']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);