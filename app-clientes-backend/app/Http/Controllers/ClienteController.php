<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function mostrar(){
        return response()->json(Cliente::all());
    }

    public function crear(Request $request){
        $cliente = Cliente::create($request->all());
        return response()->json($cliente,201);
    }

    public function editar(Request $request, $id){
        $cliente = Cliente::findOrFail($id);
        $cliente->update($request->all());

        return response()->json($cliente, 200);
    }

    public function eliminar($id){
        $cliente = Cliente::findOrFail($id);
        $cliente->delete();

        return response()->json(null, 204);
    }
}
