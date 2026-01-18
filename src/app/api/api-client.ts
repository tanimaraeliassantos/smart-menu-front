import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment'; // ajusta si tu ApiClient está en otra ruta

@Injectable({ providedIn: 'root' })
export class ApiClient {
  constructor(private http: HttpClient) {}

  private join(path: string) {
    const base = environment.apiUrl.replace(/\/+$/, '');
    const p = path.startsWith('/') ? path : `/${path}`;
    return base + p;
  }

  get<T>(path: string) { return this.http.get<T>(this.join(path)); }
  post<T>(path: string, body: any) { return this.http.post<T>(this.join(path), body); }
  put<T>(path: string, body: any) { return this.http.put<T>(this.join(path), body); }
  delete<T>(path: string) { return this.http.delete<T>(this.join(path)); }
}
