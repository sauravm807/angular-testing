import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getBaseUrl() {
    return this.BASE_URL;
  }

  register(data: User): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users`, data);
  }
}
