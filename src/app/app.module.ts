import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxFormModule } from '@angular-redux/form';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from './module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
