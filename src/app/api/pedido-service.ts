import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client';
import { ItemCarrito } from '../state/pedido.sotore';

export interface NuevoPedido {
  estadoPedido: string;
  nota: string;
  items: ItemCarrito[];   // ahora encaja con lo que vamos a montar
  total: number;
  fechaCreacion: string;
  mesa: string;
}


@Injectable({ providedIn: 'root' })
export class PedidoService {
  constructor(private api: ApiClient) {}

  crearPedido(pedido: NuevoPedido): Observable<any> {
    // Ojo con la ruta: tu controller está en /pedido + "/"
    return this.api.post('/pedido', pedido);
  }
}
