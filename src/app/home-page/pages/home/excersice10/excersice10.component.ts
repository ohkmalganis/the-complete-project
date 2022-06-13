import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from "rxjs";
import { GetDataService } from "../../../services/get-data.service";
import {PostsInterface} from "../../../models/posts.interface";

@Component({
  selector: 'app-excersice10',
  templateUrl: './excersice10.component.html',
  styleUrls: ['./excersice10.component.css']
})

export class Excersice10Component implements OnInit, OnDestroy {

  subscription: Subscription;
  public datos: PostsInterface[];

  constructor(
    private getData: GetDataService
  ) {
    this.subscription = this.getData.getalldata().subscribe((datos) => {
      this.datos = datos;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
