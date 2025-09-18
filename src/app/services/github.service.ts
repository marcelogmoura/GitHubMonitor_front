import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../interfaces/repository.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/GitHub`;

  constructor() { }

  /**
   * Busca os repositórios de um usuário do GitHub através da nossa API .NET
   * @param username O nome do usuário no GitHub
   * @returns Um Observable com a lista de repositórios
   */
  getRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/${username}`);
  }
}