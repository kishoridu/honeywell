import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }