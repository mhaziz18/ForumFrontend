import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ActivateComponent } from './components/activate/activate.component';
import { ActivationInProgComponent } from './components/activation-in-prog/activation-in-prog.component';
import { DashUserComponent } from './components/dash-user/dash-user.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubjectComponent } from './components/subject/subject.component';
import { DashboardGuard } from './dashbord.guard';

const routes: Routes = [
  {path : "" , component : HomeComponent, canActivate :[AuthGuard]},
  {path : "subject/:id" , component : SubjectComponent , canActivate :[AuthGuard]},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent },
  {path : "activate",component:ActivateComponent },
  {path : "activation",component:ActivationInProgComponent },
  {path : "dashbord",component:DashbordComponent, canActivate :[DashboardGuard], children: [
    {path : "users",component:DashUserComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
