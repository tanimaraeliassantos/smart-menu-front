export type Role = 'CLIENTE' | 'BARRA' | 'CAMARERO' | 'ADMIN';

export interface User {
  id: string;
  nombre: string;
  role: Role;
  mesaId?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
