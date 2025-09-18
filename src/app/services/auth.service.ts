import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest, AuthResponse } from '../interfaces/auth.interfaces';
import { environment } from '../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private http = inject(HttpClient);

  
  private apiUrl = `${environment.apiUrl}/Auth`;

  constructor() { }

  /**
   * Envia as credenciais do usuário para a API para autenticação.
   * @param credentials O email e a senha do usuário.
   * @returns Um Observable com a resposta da API (contendo o token).
   */
  login(credentials: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials);
  }
}