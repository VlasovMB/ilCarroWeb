import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.scss']
})
export class FindCarComponent implements OnInit {

  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {
  }


}
