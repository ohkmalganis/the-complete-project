import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeChildComponent } from './pages/home/home-child/home-child.component';

import { HomePageService } from "./services/home-page.service";
import { NgrxCallComponent } from './home/ngrx-call/ngrx-call.component';
import { RxjsCallComponent } from './home/rxjs-call/rxjs-call.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeChildComponent,
    NgrxCallComponent,
    RxjsCallComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HomePageService
  ]
})
export class HomePageModule { }
