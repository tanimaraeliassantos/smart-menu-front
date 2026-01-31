import { Injectable } from '@angular/core';
import { ApiClient } from './api-client';
import { endpoints } from '../config/endpoints';
import type { Producto } from '../models/menu.models';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private api: ApiClient) {}

  getMenu() {
    return this.api.get<Producto[]>(endpoints.productos.list);
  }
}
