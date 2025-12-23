import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl
  private http = inject(HttpClient)

  login(email: string, password: string, mac: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password, mac })
  }
}
