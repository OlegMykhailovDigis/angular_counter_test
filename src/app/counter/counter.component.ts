import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';
import { change, reset } from '../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<any>;
  
  constructor(private store: Store<{ count: {low: number; high: number} }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() { }

  subscription: Subscription;
  interval$ = interval(1000);

  start() {
    this.subscription = this.interval$.subscribe(() => this.store.dispatch(change()));
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reset() {
    this.store.dispatch(reset());
  }
}
