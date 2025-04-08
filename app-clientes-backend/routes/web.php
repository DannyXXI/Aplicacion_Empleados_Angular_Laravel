<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;

Route::get('/', function () {
    return view('welcome');
});

Route::get("/token", function () {
    return response()->json(['csrfToken' => csrf_token()]); // obtener el token CSRF para peticiones POST, PUT, PATCH, DELETE
});

Route::get("/mostrar", [ClienteController::class, "mostrar"]);

Route::post("/crear", [ClienteController::class, "crear"]);

Route::put("/editar/{id}", [ClienteController::class, "editar"]);

Route::delete("/eliminar/{id}", [ClienteController::class, "eliminar"]);