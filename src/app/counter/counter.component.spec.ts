import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { OutputComponent } from '../output/output.component';
import { StoreModule, Store } from '@ngrx/store';
import { CounterReducer, State } from '../store/reducers/counter.reducer';
import { CounterEffects } from '../store/effects/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { change, reset } from '../store/actions/counter.actions';

describe('CounterComponent', () => {
  let store: Store<State>;
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CounterComponent,
        OutputComponent 
    ],
      imports: [
        StoreModule.forRoot({count: CounterReducer}),
        EffectsModule.forRoot([CounterEffects])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start counter and dispatch "change" action', fakeAsync(() => {
    component.start();
    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(change());

    component.subscription.unsubscribe();
  }));

  it('should remove inteval subscription on stop', fakeAsync(() => {
    component.start();
    tick(1000);
    component.stop();
    expect(component.subscription.closed).toBeTruthy();
  }));

  it('should dispatch "reset" action', fakeAsync(() => {
    component.start();
    tick(1000);
    component.reset();
    expect(store.dispatch).toHaveBeenCalledWith(reset());
    
    component.subscription.unsubscribe();
  }));
});
