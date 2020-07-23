import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoubleRangeSliderComponent} from './double-range-slider.component';

describe('DoubleRangeSliderComponent', () => {
  let component: DoubleRangeSliderComponent;
  let fixture: ComponentFixture<DoubleRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleRangeSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
