import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = environment.apiUrl
  private readonly http = inject(HttpClient)
  private router = inject(Router)

  private readonly TOKEN_KEY = 'token'
  private readonly USER_KEY = 'user_data'

  public currentUser = signal<any>(null)

  constructor() {
    const savedUser = localStorage.getItem(this.USER_KEY);
    if (savedUser) {
      try {
        this.currentUser.set(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem(this.USER_KEY)
      }
    }
  }


  login(email: string, password: string, mac: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password, mac })
      .pipe(
        tap(response => {
          if (response && response.access_token) {
            this.saveSession(response.access_token, response.user);
          }
        })
      )
  }

  private saveSession(access_token: string, user: any): void {
    localStorage.setItem(this.TOKEN_KEY, access_token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    this.currentUser.set(user)
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY)
    this.currentUser.set(null);
    this.router.navigate(['/auth/login'])
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
