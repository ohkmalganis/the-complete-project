import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProfileInterface} from "../../models/profile.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myGroup!: FormGroup;
  public data!: ProfileInterface;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.newForms();
  }

  newForms(): void {
    this.myGroup = this.fb.group({
      firstName: ['Lenin', Validators.required],
      lastName: ['Aparicio', Validators.required],
      username: ['ohkmalganis', Validators.required],
      email: ['ohkmalganis@gmail.com', Validators.compose([Validators.required, Validators.email])],
      address: ['My first address', Validators.required],
      address2: [''],
      country: ['1', Validators.required],
      state: ['LA', Validators.required],
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
      address2: this.myGroup.get('address2')?.value,
      country: this.myGroup.get('country')?.value,
      state: this.myGroup.get('state')?.value,
      zip: this.myGroup.get('zip')?.value,
    };
    console.log(this.data);
  }

}
