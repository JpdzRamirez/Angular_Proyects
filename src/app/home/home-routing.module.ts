import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotComponent } from './forgotPassword/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    {
      path: '',
      component:HomeComponent,
      children:[
        {path: 'login', component: LoginComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'forgot', component: ForgotComponent},
      ]
    },
];//3172367896

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
