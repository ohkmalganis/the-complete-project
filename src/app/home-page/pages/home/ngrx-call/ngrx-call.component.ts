import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from "../../../../store/actions/counter.actions";

@Component({
  selector: 'app-ngrx-call',
  templateUrl: './ngrx-call.component.html',
  styleUrls: ['./ngrx-call.component.css']
})
export class NgrxCallComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
  }

}
