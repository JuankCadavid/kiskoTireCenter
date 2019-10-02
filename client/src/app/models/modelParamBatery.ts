//Only Battery

export interface modelParamBatery {
    idMarca?: number;
    idModelo?: number;

}
export interface dropDown {
    label: string,
    value: string
}

export interface ModelParam {
    id: string
}

export interface battery {
    Opcion: string,
    Bateria: number,
    Numero: string,
    Descripcion: string,
    Marca: string
}

export interface modelAudit {

    marca_vehiculo: number,
    modelo_vehiculo: number,
    numero_bateria: string,
    codigo_bateria: string
}