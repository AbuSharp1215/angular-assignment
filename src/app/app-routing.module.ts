import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HttpGetRequestComponent } from './components/http-get-request/http-get-request.component';

const routes: Routes = [
  {path:'calculator', component:CalculatorComponent},
  {path:'adduser', component:AddUserComponent},
  {path:'httpget', component:HttpGetRequestComponent},
  {path: '**', component:AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
