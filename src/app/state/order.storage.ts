import { Injectable } from '@angular/core';

export type CartItem = {
  productoId: string;      // id del producto (string)
  nombreActual: string;
  precioActual: number;    // precio unitario
  cantidad: number;
  nota?: string;
};

@Injectable({ providedIn: 'root' })
export class OrderStore {
  private key = 'sm_cart';

  // ---- persistencia simple en localStorage ----
  getItems(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(this.key) || '[]');
    } catch {
      return [];
    }
  }

  setItems(items: CartItem[]) {
    localStorage.setItem(this.key, JSON.stringify(items || []));
  }

  clear() {
    localStorage.removeItem(this.key);
  }

  // opcional: helpers
  getTotalItems(): number {
    return this.getItems().reduce((a, i) => a + (i.cantidad || 0), 0);
  }

  getTotalEuros(): number {
    return this.getItems().reduce((s, i) => s + (i.cantidad || 0) * (i.precioActual || 0), 0);
  }
}
