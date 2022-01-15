import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }


  login(user: { userName: string, password: string }) {
    return this.http.post('http://localhost:3000/auth/login', user)
  }
}
