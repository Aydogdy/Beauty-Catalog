import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxFormModule } from '@angular-redux/form';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from './module';
import { ProductService } from './services/product.service';


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
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
