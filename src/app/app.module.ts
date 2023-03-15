import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BoardModule } from './board/board.module';
import { HomeModule } from './home/home.module';
import { CrudModule } from './crud/crud.module';
import { ListaFormularioModule } from './crud/lista.formulario/lista-formulario.module';
import { MaterialCdkModule } from './material-cdk/material-cdk.module';

import { HttpClientModule } from '@angular/common/http';

//Animation
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    BoardModule,
    HomeModule,
    CrudModule,
    ListaFormularioModule,
    MaterialCdkModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
