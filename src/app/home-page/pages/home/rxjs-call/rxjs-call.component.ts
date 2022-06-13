import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {HomePageService} from "../../../services/home-page.service";

@Component({
  selector: 'app-rxjs-call',
  templateUrl: './rxjs-call.component.html',
  styleUrls: ['./rxjs-call.component.css']
})
export class RxjsCallComponent implements OnInit, OnDestroy {

  public message:string='';
  subscription: Subscription;

  constructor(
    private dataShare: HomePageService
  ) {
    this.subscription = this.dataShare.currentMessage.subscribe(message => this.message = message)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeTheMessage():void {
    this.dataShare.changeMessage('This is a new message, shared with services and BehaviorSubject!');
  }

}
