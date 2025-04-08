<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $table = "clientes";  // nombre de la tabla

    protected $primaryKey = "id";   // clave primaria de la tabla

    protected $fillable = ["nombre" , "cif" , "direccion" , "grupo"];  // campos que son asignados en masa (solo con metodos create y update)

    protected $hidden = ["created_at" , "updated_at"]; // campos que estaran ocultos cuando Laravel convierta el modelo en un array o JSON

    // Definir cómo se deben convertir los atributos al acceder a ellos
    protected $casts = [
        "id" => "integer",
        "nombre" => "string",
        "cif" => "string",
        "direccion" => "string",
        "grupo" => "string",
        "created_at" => "datetime",
        "updated_at" => "datetime"
    ];
}
