import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-promises',
  templateUrl: './home-promises.component.html',
  styleUrls: ['./home-promises.component.css']
})
export class HomePromisesComponent implements OnInit {

  secondMessage:string='Initial message before promise.';
  message:Promise<string>;

  constructor() { }

  ngOnInit(): void {
    this.message = this.callANewPromise();
    this.callANewPromise().then((response) => {
      this.secondMessage = response;
    }).catch((err:any) => {
      console.log(err);
    });
  }

  callANewPromise():Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Message changed by a promise result.');
      },2500);
    });
  }

}
