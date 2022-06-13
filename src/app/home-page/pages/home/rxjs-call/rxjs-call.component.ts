import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription, Observable, Observer } from 'rxjs';
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

  public counter:number=0;

  constructor(
    private homePageService: HomePageService
  ) {
    this.data$ = this.homePageService.sharingObservable;
  }

  ngOnInit(): void {
    this.manualObservable();
  }

  manualObservable() {
    const customIntervalObservable = new Observable<number>((observer:Observer<number>) => {
      let count=0;
      setInterval(() => {
        observer.next(count);
        count ++;
        if(count > 10) {
          observer.complete();
        }
      }, 1000);
    });
    this.subscription = customIntervalObservable.subscribe(data => {
      this.counter = data;
    })
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
