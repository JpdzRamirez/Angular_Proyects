import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {MaterialCdkModule} from '../utils/material-cdk/material-cdk.module';


const declaration=[HomeComponent,LoginComponent];
const importe=[HomeRoutingModule,MaterialCdkModule,CommonModule,CoreModule];

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
