import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserLogin } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import db from '../../assets/json/db.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:3000";
  isLoggedInSubject = new BehaviorSubject(false);
  isLoggedInMessage = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  get baseUrl() {
    return this.BASE_URL;
  }

  ifLoggedIn() {
    let ifLoggedIn: boolean = false;
    this.isLoggedInMessage.subscribe(res => {
      console.log("===", res)
      ifLoggedIn = res;
    });
    return ifLoggedIn;
  }

  setUserDataInLocal(email: string) {
    localStorage.setItem("userData", JSON.stringify({ isLogin: this.ifLoggedIn(), email }));
  }

  getUserDataLocal() {
    const jsonData = localStorage.getItem("userData") as string;
    return JSON.parse(jsonData);
  }

  register(data: User): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users`, data);
  }

  login(data: UserLogin) {
    const users = db.users;
    const userIndex = users.findIndex(elem => elem.email === data.email);
    if (userIndex === -1) return { sucess: false, message: 'Email not found' };
    const ifPassMatch = users[userIndex].password === data.password;
    if (!ifPassMatch) return { sucess: false, message: 'Password not match' };
    this.isLoggedInSubject.next(true);
    this.setUserDataInLocal(data.email);
    return { sucess: true, message: 'Login successful' };
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`);
  }
}
