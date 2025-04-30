import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
/**
 * LoginComponent is responsible for rendering the login form and handling user authentication.
 * It uses Angular's Reactive Forms to manage form state and validation.
 * The component interacts with the AuthService to perform login operations.
 */
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    const { user, password } = this.loginForm.value;
    const loginResult = this.authService.login(user, password);
    this.isLoading = false;

    if (loginResult) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Las credenciales son incorrectas';
    }
  }

  onReset() {
    this.loginForm.reset();
    this.errorMessage = '';
  }

  isValidField(field: string): boolean {
    return this.loginForm.get(field)?.invalid && (this.loginForm.get(field)?.touched || this.loginForm.get(field)?.dirty);
  }
}
