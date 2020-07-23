import {Component} from '@angular/core';
import {Options} from 'ng5-slider';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-double-range-slider',
  templateUrl: './double-range-slider.component.html',
  styleUrls: ['./double-range-slider.component.scss']
})
export class DoubleRangeSliderComponent {

  constructor(public sharedService: SharedService) {
  }


  options: Options = {
    floor: 100,
    ceil: 600,
    step: 50,
    hideLimitLabels: true,
    animate: false,
    hidePointerLabels: true,
  };
}
