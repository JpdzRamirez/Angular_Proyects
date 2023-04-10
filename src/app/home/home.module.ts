import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';

import { HomeRoutingModule } from './home-routing.module';

import { ForgotComponent } from './forgotPassword/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MaterialCdkModule} from '../utils/material-cdk/material-cdk.module';

import { HttpClientModule } from '@angular/common/http';

import { UsuariosService } from '../utils/services/usuarios.service';
import { myfunctionsService } from '../utils/services/my-functions.service';

const declaration=[ForgotComponent,LoginComponent,SignupComponent];

const exported=[LoginComponent, SignupComponent,ForgotComponent];

const imported=[HomeRoutingModule,MaterialCdkModule,CommonModule,CoreModule,HttpClientModule];

const provided=[UsuariosService,myfunctionsService];

@NgModule({
  declarations: [
    declaration,
  ],
  imports: [
    imported,
  ],
  providers:[
    provided,
  ],
  exports:[
    exported,
  ]
})
export class HomeModule { }
