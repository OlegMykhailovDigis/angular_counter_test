import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './output/output.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterReducer } from './store/reducers/counter.reducer';
import { CounterEffects } from './store/effects/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: CounterReducer}),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
