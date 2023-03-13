import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BoardModule } from './board/board.module';
import { HomeModule } from './home/home.module';
import { CrudModule } from './crud/crud.module';

//HTTPCLIENT
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BoardModule,
    HomeModule,
    CrudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
