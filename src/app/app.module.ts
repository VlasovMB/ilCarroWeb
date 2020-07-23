import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {FindCarComponent} from './components/find-car/find-car.component';
import {Ng5SliderModule} from 'ng5-slider';
import {DoubleRangeSliderComponent} from './components/double-range-slider/double-range-slider.component';
import {CardCarComponent} from './components/card-car/card-car.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FindCarComponent,
    DoubleRangeSliderComponent,
    CardCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
