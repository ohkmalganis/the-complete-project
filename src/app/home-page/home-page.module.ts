import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HomePageRoutingModule } from './home-page-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { HomePageService } from "./services/home-page.service";
import { GetDataService } from "./services/get-data.service";

import { NgrxCallComponent } from './pages/home/ngrx-call/ngrx-call.component';
import { RxjsCallComponent } from './pages/home/rxjs-call/rxjs-call.component';
import { HighlightDirective } from "./directives/highlight.directive";
import { ShortenPipe } from "./pipes/shorten.pipe";
import { HomePromisesComponent } from './pages/home/home-promises/home-promises.component';
import { Excersice10Component } from './pages/home/excersice10/excersice10.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeChildComponent } from './pages/home/home-child/home-child.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeChildComponent,
    NgrxCallComponent,
    RxjsCallComponent,
    HighlightDirective,
    ShortenPipe,
    HomePromisesComponent,
    Excersice10Component
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HomePageService,
    GetDataService
  ]
})
export class HomePageModule { }
