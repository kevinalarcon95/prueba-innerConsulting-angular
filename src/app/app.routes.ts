import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CharterDetailComponent } from './home/charter-detail/charter-detail.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'character/:id', component: CharterDetailComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
