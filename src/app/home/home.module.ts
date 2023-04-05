import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {MaterialCdkModule} from '../material-cdk/material-cdk.module';


const declaration=[HomeComponent,LoginComponent];
const importe=[CommonModule,HomeRoutingModule,MaterialCdkModule];

@NgModule({
  declarations: [
    declaration,

  ],
  imports: [
    importe,

  ],
  providers:[

   ]
})
export class HomeModule { }
