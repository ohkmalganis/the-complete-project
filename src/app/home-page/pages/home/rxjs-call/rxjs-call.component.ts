import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {HomePageService} from "../../../services/home-page.service";
import {MessageInterface} from "../../../models/message.interface";

@Component({
  selector: 'app-rxjs-call',
  templateUrl: './rxjs-call.component.html',
  styleUrls: ['./rxjs-call.component.css']
})
export class RxjsCallComponent implements OnInit, OnDestroy {

  public message:string='';
  subscription: Subscription;

  private data$: Observable<MessageInterface>;

  constructor(
    private homePageService: HomePageService
  ) {
    this.data$ = this.homePageService.sharingObservable;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeTheMessage():void {
    this.homePageService.sharingObservableData = {
      message: 'Hemos actualizado la informacion'
    };
  }

}
