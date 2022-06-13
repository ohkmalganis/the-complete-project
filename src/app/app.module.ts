import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { HighlightDirective } from "./home-page/directives/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
