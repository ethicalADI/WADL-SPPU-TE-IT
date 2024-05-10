import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  username = '';
  password = '';
  name='';
  email='';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}
  register() {
    if (this.password === this.confirmPassword) {
      this.authService.register({ username: this.username, password: this.password, name: this.name, email: this.email });
      this.router.navigate(['/login']);
    } else {
      alert("Passwords do not match!");
    }
  }
}
