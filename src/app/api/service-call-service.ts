import { Injectable } from '@angular/core';
import { ApiClient } from './api-client';
import { endpoints } from '../config/endpoints';

@Injectable({ providedIn: 'root' })
export class ServiceCallService {
  constructor(private api: ApiClient) {}

  callWaiter(body: { mesaId?: string }) {
    return this.api.post<{ ok: boolean }>(endpoints.service.call, body);
  }
}
