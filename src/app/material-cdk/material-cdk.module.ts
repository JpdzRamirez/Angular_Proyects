import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//Flex Boxes
import { FlexLayoutModule } from '@angular/flex-layout';



//Forms
import { ReactiveFormsModule } from '@angular/forms';

//Animation
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const components = [MatToolbarModule, MatIconModule,MatCardModule,
                    MatButtonModule,FlexLayoutModule,ReactiveFormsModule,BrowserAnimationsModule,BrowserModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: components,
})
export class MaterialCdkModule { }
