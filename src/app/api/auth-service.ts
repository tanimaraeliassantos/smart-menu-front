import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'sm_basic_token';

  setCredentials(email: string, password: string) {
    const token = btoa(`${email}:${password}`);
    localStorage.setItem(this.key, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  hasCredentials(): boolean {
    return !!this.getToken();
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}
