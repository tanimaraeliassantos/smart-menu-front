import { Injectable } from '@angular/core';

export type ItemCarrito = {
  productoId: string;     // id del producto (string)
  nombreActual: string;
  precioActual: number;   // precio unitario
  cantidad: number;
  nota?: string;
};

@Injectable({ providedIn: 'root' })
export class PedidoStore {
  private clave = 'sm_carrito';

  obtenerItems(): ItemCarrito[] {
    try {
      return JSON.parse(localStorage.getItem(this.clave) || '[]');
    } catch {
      return [];
    }
  }

  guardarItems(items: ItemCarrito[]) {
    localStorage.setItem(this.clave, JSON.stringify(items || []));
  }

  vaciar() {
    localStorage.removeItem(this.clave);
  }

  totalItems(): number {
    return this.obtenerItems().reduce((a, i) => a + (i.cantidad || 0), 0);
  }

  totalEuros(): number {
    return this.obtenerItems().reduce((s, i) => s + (i.cantidad || 0) * (i.precioActual || 0), 0);
  }
}
