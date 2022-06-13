import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeChildComponent } from './pages/home/home-child/home-child.component';

import {HomePageService} from "./services/home-page.service";

@NgModule({
  declarations: [
    HomeComponent,
    HomeChildComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  providers: [
    HomePageService
  ]
})
export class HomePageModule { }
