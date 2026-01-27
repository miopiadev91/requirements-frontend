import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);
  private router = inject(Router);
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user_data';
  public currentUser = signal<any>(null);

  constructor() {
    const savedUser = localStorage.getItem(this.USER_KEY);
    if (savedUser &&  this.isLoggedIn()) {
      try {
        this.currentUser.set(JSON.parse(savedUser));
        this.refreshUserProfile().subscribe();
      } catch (error) {
        localStorage.removeItem(this.USER_KEY);
      }
    }
  }


  login(email: string, password: string, mac: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password, mac })
      .pipe(
        tap(response => {
          if (response?.access_token) {
            this.saveSession(response.access_token, response.user);
          }
        })
      )
  }

  private saveSession(access_token: string, user: any): void {
    localStorage.setItem(this.TOKEN_KEY, access_token);

    const userData = {
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      role: user.role
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
    this.currentUser.set(user);
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/profile`)
      .pipe(
        tap(user => {
          this.currentUser.set(user);

          const userData = {
            user_id: user.user_id,
            username: user.username,
            email: user.email,
            role: user.role
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
        }),
        catchError(error => {
          if (error.status === 401) {
            this.logout();
          }
          return of(null);
        })
      );
  }

  private refreshUserProfile(): Observable<any> {
    if(!this.isLoggedIn()) {
       return of(null);
    }
    return this.getUserProfile();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
