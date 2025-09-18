export interface AuthRequest {
  email: string;
  password?: string; 
}

export interface AuthResponse {
  email: string;
  nome: string;
  token: string;
}