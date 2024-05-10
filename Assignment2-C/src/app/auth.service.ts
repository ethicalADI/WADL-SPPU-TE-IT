// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  username: string;
  password: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser = new BehaviorSubject<User | null>(null);

  constructor() {
    this.loadUser();  
  }

  register(user: User) {
    console.log('User registered:', user);
    localStorage.setItem('user', JSON.stringify(user)); 
  }

  login(username: string, password: string) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        this.loggedInUser.next(user);
        console.log('User logged in:', user);
      } else {
        console.error('Login failed: Username or password is incorrect');
        this.loggedInUser.next(null);
      }
    } else {
      console.error('Login failed: No registered user');
      this.loggedInUser.next(null);
    }
  }

  logout() {
    this.loggedInUser.next(null);
    console.log('User logged out');
  }

  getUser() {
    return this.loggedInUser.asObservable();
  }

  private loadUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      this.loggedInUser.next(user);
    }
  }
}
