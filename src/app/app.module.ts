import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./home-page/interceptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
