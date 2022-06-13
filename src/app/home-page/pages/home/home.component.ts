import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import {ProfileInterface} from "../../models/profile.interface";
import {HomePageService} from "../../services/home-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public myGroup!: FormGroup;
  public data!: ProfileInterface;

  public childEvent:number=0;

  public message:string='';
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private dataShare: HomePageService
    ) {

  }

  ngOnInit(): void {
    this.newForms();
    this.subscription = this.dataShare.currentMessage.subscribe(message => this.message = message)
  }

  newForms(): void {
    this.myGroup = this.fb.group({
      firstName: ['Lenin', Validators.required],
      lastName: ['Aparicio', Validators.required],
      username: ['ohkmalganis', Validators.required],
      email: ['ohkmalganis@gmail.com', Validators.compose([Validators.required, Validators.email])],
      address: ['My first address', Validators.required],
      country: ['Bolivia', Validators.required],
      state: ['La Paz', Validators.required],
      zip: ['591', Validators.required],
    });

  }

  handleSubmit():void {
    console.log('submited!', this.myGroup.getRawValue());
    this.data = {
      id: null,
      firstName: this.myGroup.get('firstName')?.value,
      lastName: this.myGroup.get('lastName')?.value,
      username: this.myGroup.get('username')?.value,
      email: this.myGroup.get('email')?.value,
      address: this.myGroup.get('address')?.value,
      country: this.myGroup.get('country')?.value,
      state: this.myGroup.get('state')?.value,
      zip: this.myGroup.get('zip')?.value,
    };
  }

  childResponse(event:boolean):void {
    if(event){
      this.childEvent++;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
