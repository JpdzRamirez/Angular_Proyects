import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialCdkModule } from "./../material-cdk/material-cdk.module";
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const declarables = [ HeaderComponent, FooterComponent ];
@NgModule({
  declarations: [declarables],
  imports: [
    CommonModule,
    MaterialCdkModule,
    RouterModule,
    MatIconModule
  ],
  exports: declarables,
})
export class SharedModule { }
