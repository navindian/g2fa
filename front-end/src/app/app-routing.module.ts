import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../app/components/home/home.component";
import { LoginComponent } from "../app/components/login/login.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { AuthGuardGuard } from "../app/guards/auth-guard.guard";
import { LoginGuard } from "../app/guards/login.guard";

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full', canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: "register", component: RegisterComponent, canActivate: [LoginGuard] },
  { path: "**", redirectTo: '/login', pathMatch: 'full', canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
