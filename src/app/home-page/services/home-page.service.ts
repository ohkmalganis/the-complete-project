import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { MessageInterface } from "../models/message.interface";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private messageSource:BehaviorSubject<MessageInterface> = new BehaviorSubject<MessageInterface>({message: 'Initial message - BehaviorSubject'});

  constructor() { }

  get sharingObservable() {
    return this.messageSource.asObservable();
  }

  set sharingObservableData(message: MessageInterface) {
    this.messageSource.next(message);
  }

}
