import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BoardModule } from './board/board.module';
import { HomeModule } from './home/home.module';

import { CrudModule } from './board/crud/crud.module';



import { HttpClientModule } from '@angular/common/http';

//Animation
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL

import { MaterialCdkModule } from './utils/material-cdk/material-cdk.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { SingupComponent } from './home/singup/singup.component';
import { myfunctionsService } from './utils/my-functions';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    BoardModule,HomeModule,
    MaterialCdkModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CrudModule
  ],
  providers: [myfunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
