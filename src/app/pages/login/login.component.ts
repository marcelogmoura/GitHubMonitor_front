import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  
  loginForm: FormGroup;

  constructor() {
  
    this.loginForm = this.fb.group({
      email: ['admin@email.com', [Validators.required, Validators.email]],
      password: ['Admin123', [Validators.required]]
    });
  }

  
  submitLogin(): void {
    if (this.loginForm.invalid) {
    
      return;
    }

    
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        
        console.log('Login bem-sucedido!', response);
        
        localStorage.setItem('authToken', response.token);
        
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {        
        console.error('Erro no login:', err);
        
        alert('Credenciais inválidas. Tente novamente.');
      }
    });
  }
}