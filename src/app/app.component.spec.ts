import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './output/output.component';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './store/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        OutputComponent
      ],
      imports: [
        StoreModule.forRoot({count: CounterReducer}),
        EffectsModule.forRoot([CounterEffects])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
