import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Credentials } from 'src/app/shared/interfaces/credentials';
import { passwordMatchesValidator } from '../utils/password-matches';
import { RegisterStatus } from '../data-access/register.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register-form',
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" #form="ngForm">
      <mat-form-field appearance="fill">
        <mat-label>email</mat-label>
        <input
          matNativeControl
          formControlName="email"
          type="email"
          placeholder="email"
        />
        <mat-icon matPrefix>email</mat-icon>
        @if (
          (registerForm.controls.email.dirty || form.submitted) &&
          !registerForm.controls.email.valid
        ) {
          <mat-error>Please provide a valid email</mat-error>
        }
      </mat-form-field>
      <mat-form-field>
        <mat-label>password</mat-label>
        <input
          matNativeControl
          formControlName="password"
          data-test="create-password-field"
          type="password"
          placeholder="password"
        />
        <mat-icon matPrefix>lock</mat-icon>
        @if (
          (registerForm.controls.password.dirty || form.submitted) &&
          !registerForm.controls.password.valid && registerForm.controls.password.hasError('pattern')
        ) {
          <mat-error>Week Password</mat-error>
        }
      </mat-form-field>
      <mat-form-field>
        <mat-label>confirm password</mat-label>
        <input
          matNativeControl
          formControlName="confirmPassword"
          type="password"
          placeholder="confirm password"
        />
        <mat-icon matPrefix>lock</mat-icon>
        @if (
          (registerForm.controls.confirmPassword.dirty || form.submitted) &&
          registerForm.hasError('passwordMatch')
        ) {
          <mat-error>Must match password field</mat-error>
        }
      </mat-form-field>

      @if (status() === 'error') {
        <mat-error>Could not create account with those details.</mat-error>
      } @else if (status() === 'creating') {
        <mat-spinner diameter="50"></mat-spinner>
      }

      <button
        mat-raised-button
        color="accent"
        type="submit"
        [disabled]="status() === 'creating'"
      >
        Submit
      </button>
  
    </form>
  `,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      button {
        width: 63%;
      }

      mat-error {
        margin: 2px ;
      }

      mat-spinner {
        margin: 1rem 0;
        
      }
      
      a {
        margin: 2rem;
        color: var(--accent-darker-color);
    }
    
    `,
  ],
})
export class RegisterFormComponent {
  status = input.required<RegisterStatus>();
  register = output<Credentials>();

  private fb = inject(FormBuilder);

  registerForm = this.fb.nonNullable.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/),]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      updateOn: 'blur',
      validators: [passwordMatchesValidator],
    },
  );

  onSubmit() {
    if (this.registerForm.valid) {
      const { confirmPassword, ...credentials } =
        this.registerForm.getRawValue();
      this.register.emit(credentials);
    }
  }
}
