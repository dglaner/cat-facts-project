import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatFactsComponent} from "./cat/cat-facts.component";
import {AuthGuard} from "../_services/auth-guard.service";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/cats', pathMatch: 'full'},
  {path: 'cats', component: CatFactsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
