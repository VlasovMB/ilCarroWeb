import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  doubleRangeSliderMinValue: number = 100;
  doubleRangeSliderMaxValue: number = 300;

}
