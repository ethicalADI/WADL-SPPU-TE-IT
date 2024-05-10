import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { RegisterPageComponent } from './app/register-page/register-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { ProfilePageComponent } from './app/profile-page/profile-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'register', component: RegisterPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]),
  ],
});
