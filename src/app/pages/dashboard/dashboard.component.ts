import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Imports do Chart.js e ng2-charts
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import { GithubService } from '../../services/github.service';
import { Repository } from '../../interfaces/repository.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BaseChartDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  private fb = inject(FormBuilder);
  private githubService = inject(GithubService);
  private router = inject(Router);

  // Propriedades do componente
  searchForm!: FormGroup;
  repositories: Repository[] = [];
  errorMessage: string | null = null;
  isLoading = false;

  // --- Configuração do Gráfico ---
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Garante que a escala Y seja de números inteiros
          color: '#fff' // Cor do texto da escala Y
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // Cor das linhas do grid
        }
      },
      x: {
        ticks: {
          color: '#fff' // Cor do texto da escala X
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff' // Cor do texto da legenda
        }
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [], // Nomes dos repositórios
    datasets: [
      {
        data: [], // Número de estrelas
        label: 'Estrelas ★',
        backgroundColor: '#4e73df',
        hoverBackgroundColor: '#2e59d9'
      }
    ]
  };
  // --- Fim da Configuração do Gráfico ---

  ngOnInit(): void {
    // Inicializa o formulário com um valor padrão
    this.searchForm = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  // Método chamado ao buscar um usuário
  searchUser(): void {
    if (this.searchForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = null;
    this.repositories = []; // Limpa os resultados anteriores

    const username = this.searchForm.value.username;

    this.githubService.getRepositories(username).subscribe({
      next: (data) => {
        this.repositories = data;
        this.updateChart(data);
        this.isLoading = false;
        if (data.length === 0) {
          this.errorMessage = 'Nenhum repositório público encontrado para este usuário.';
        }
      },
      error: (err) => {
        console.error('Erro ao buscar repositórios:', err);
        this.errorMessage = 'Usuário não encontrado ou erro na API.';
        this.isLoading = false;
        this.updateChart([]); // Limpa o gráfico em caso de erro
      }
    });
  }

  // Atualiza os dados do gráfico
  private updateChart(repos: Repository[]): void {
    // Pega os 10 repositórios com mais estrelas
    const topRepos = repos.sort((a, b) => b.stargazersCount - a.stargazersCount).slice(0, 10);

    this.barChartData.labels = topRepos.map(repo => repo.name);
    this.barChartData.datasets[0].data = topRepos.map(repo => repo.stargazersCount);
  }

  
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}