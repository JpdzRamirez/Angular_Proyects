import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialCdkModule } from "../utils/material-cdk/material-cdk.module";
import {RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';

const declarables = [ HeaderComponent, FooterComponent,SpinnerComponent ];
const imported=[   CommonModule,MaterialCdkModule,RouterModule,MatIconModule];

@NgModule({
  declarations: [declarables],
  imports: [imported],
  exports: [declarables],
})
export class SharedModule { }
