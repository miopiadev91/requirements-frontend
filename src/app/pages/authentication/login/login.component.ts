import { CommonModule, NgClass } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgxToastrService } from '../../../_services/ngx-toastr/ngx-toastr.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private router = inject(Router)
  private destroyRef = inject(DestroyRef)
  private toastrService = inject(NgxToastrService)

  hide_show: boolean = false;
  passwordHide() {
    this.hide_show = !this.hide_show;
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    mac: ['00:00:00:00:00:00']
  })

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }

    const { email, password, mac } = this.loginForm.value;

    this.authService.login(email, password, mac)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (user: any) => {
          this.toastrService.success('Credenciales correctas', 'Bienvenid@')
          this.router.navigate(['/admin'])
        },
        error: () => {
          this.toastrService.error('Credenciales incorretas', 'Error')
        }
      })
  }
}
