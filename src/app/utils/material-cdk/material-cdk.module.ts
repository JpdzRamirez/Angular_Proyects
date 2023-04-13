import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
//Flex Boxes
import { FlexLayoutModule } from '@angular/flex-layout';


//Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





//Dialog
import {MatDialogModule} from '@angular/material/dialog';



const components = [MatToolbarModule, MatIconModule,MatCardModule,
                    MatButtonModule,FlexLayoutModule,ReactiveFormsModule,
                    MatDialogModule,FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule
                  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: components,
})
export class MaterialCdkModule { }
