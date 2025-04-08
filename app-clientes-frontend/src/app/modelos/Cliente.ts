export interface Cliente {
    id: number;
    nombre: string;
    cif: string;
    direccion: string;
    grupo: string;
}

export interface AñadirCliente {
    nombre: string;
    cif: string;
    direccion: string;
    grupo: string;
}
  