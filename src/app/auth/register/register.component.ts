import { Component, effect, inject } from '@angular/core';
import { RegisterFormComponent } from './ui/register-form.component';
import { RegisterService } from './data-access/register.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/data-access/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  template: `

<div class="container gradient-bg">
  <div class="header">
    <div class="site-name" routerLink="">
      Anime<span>>Hub</span>
    </div>
  </div>
  <div class="content">
    <div class="form-container">
      <h2>Create an Account</h2>
      <p class="form-description">Join AnimeHub and explore amazing content.</p>
      <app-register-form
        [status]="registerService.status()"
        (register)="registerService.createUser$.next($event)"
      ></app-register-form>
      <div class="form-footer">
        <p>Already have an account?</p>
        <a routerLink="/auth/login" class="auth-link">Log In</a>
      </div>
    </div>
  </div>
</div>

<style>
  /* Reuse styles from the login form */
  .container {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    }

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 40%;
  }

  .site-name {
    font-family: 'Comic Sans MS', sans-serif;
    font-size: 80px;
    font-weight: bold;
    color: #ffcc00;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 50px;
    cursor: pointer;
    text-shadow: 2px 2px 8px rgba(255, 204, 0, 0.8);
 }

  .site-name span {
    color: #f39c12;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
    margin-left: 200px;
  }

  .form-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 100%;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #ffcc00;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .form-description {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  app-register-form input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    outline: none;
  }

  app-register-form input::placeholder {
    color: #aaa;
  }

  app-register-form button {
    width: 100%;
    padding: 0.8rem;
    background: #ffcc00;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  app-register-form button:hover {
    background: #f39c12;
  }

  .form-footer {
    text-align: center;
    margin-top: 1.5rem;
  }

  .auth-link {
    color: #ffcc00;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
  }

  .auth-link:hover {
    color: #f39c12;
    text-decoration: underline;
  }
</style>


  `,
  providers: [RegisterService],
  imports: [RegisterFormComponent,RouterModule],
})
export default class RegisterComponent {
  public registerService = inject(RegisterService);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      if (this.authService.user()) {
        this.router.navigate(['home']);
      }
    });
  }
}
