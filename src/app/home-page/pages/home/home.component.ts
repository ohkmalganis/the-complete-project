import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {ProfileInterface} from "../../models/profile.interface";
import {HomePageService} from "../../services/home-page.service";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public myGroup!: FormGroup;
  public data!: ProfileInterface;

  public childEvent: number = 0;

  public message: string = '';
  subscription: Subscription;

  count$: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private dataShare: HomePageService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.newForms();
    this.subscription = this.dataShare.currentMessage.subscribe(message => this.message = message)
  }

  newForms(): void {
    this.myGroup = this.fb.group({
      firstName: ['Jhon', Validators.required],
      lastName: ['Doe', Validators.required],
      username: ['jhondoe', Validators.required],
      email: ['jhondoe@jhondoe.com', Validators.compose([Validators.required, Validators.email])],
      address: ['My first address', Validators.required],
      country: ['Bolivia', Validators.required],
      state: ['La Paz', Validators.required],
      zip: ['591', Validators.required],
    });

  }

  handleSubmit(): void {
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

  childResponse(event: boolean): void {
    if (event) {
      this.childEvent++;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
