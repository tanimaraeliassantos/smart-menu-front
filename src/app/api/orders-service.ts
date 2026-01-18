import { Injectable } from '@angular/core';
import { ApiClient } from './api-client';
import { endpoints } from '../config/endpoints';
import type { CreateOrderRequest, OrderResponse } from '../models/order.models';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private api: ApiClient) {}

  createOrder(body: CreateOrderRequest) {
    return this.api.post<OrderResponse>(endpoints.orders.create, body);
  }

  myOrders() {
    return this.api.get<OrderResponse[]>(endpoints.orders.myOrders);
  }
}
