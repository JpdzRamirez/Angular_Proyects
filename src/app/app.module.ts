import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BoardModule } from './board/board.module';
import { HomeModule } from './home/home.module';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Animation
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL

import { MaterialCdkModule } from './utils/material-cdk/material-cdk.module';
import { LoadingInterceptor } from './shared/spinner.interceptor';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    BoardModule,
    HomeModule,
    MaterialCdkModule,
    ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
