// src/app/profile-page/profile-page.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface User {
  username: string;
  password: string;
  email: string;
  name: string;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'], // Correct this line
})
export class ProfilePageComponent implements OnInit {
  user: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
