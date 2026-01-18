export interface OrderItem {
  productoId: string;
  cantidad: number;
  notas?: string;
}

export interface CreateOrderRequest {
  mesaId?: string;
  items: OrderItem[];
}

export interface OrderResponse {
  id: string;
  estado: 'RECIBIDO' | 'PREPARANDO' | 'LISTO' | 'ENTREGADO';
  total?: number;
}
