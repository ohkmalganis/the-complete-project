import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription, Observable, Observer } from 'rxjs';
import {HomePageService} from "../../../services/home-page.service";
import {MessageInterface} from "../../../models/message.interface";
import { filter, map } from "rxjs/operators";

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
        if(count == 11) {
          observer.complete();
        }
        if(count > 11) {
          observer.error(new Error('The count is bad!'));
        }
      }, 1000);
    });
    this.subscription = customIntervalObservable.pipe(filter(data => {
      return data > 3;
    })).subscribe(data => {
      this.counter = data;
    }, (err:Error) => {
      console.log(err);
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
