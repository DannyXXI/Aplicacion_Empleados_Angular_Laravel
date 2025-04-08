<?php
return [
    'paths' => ["mostrar", "token", "crear", "editar/*", "eliminar/*"], // Ruta a la que quieres habilitar CORS
    'allowed_methods' => ['*'], // Permitir todos los métodos
    'allowed_origins' => ['*'], // Permitir solicitudes de cualquier origen
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Permitir todos los encabezados
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false, // Cambiar a true si usas autenticación con cookies
];
/*
NOTA PARA HABILITAR CORS en LARAVEL 12
- cree este archivo con esta estructura (de base)
- tras crearlo use estos comandos
    - php artisan config:clear
    - php artisan cache:clear
*/


