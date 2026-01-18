export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  tipoIva: number;
  importeIva: number;
  precioConIva: number;
  imagen?: string;
  disponible: boolean;
  categoria?: string;
}

export interface MenuResponse {
  productos: Producto[];
}
