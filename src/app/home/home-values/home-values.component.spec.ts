import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValuesComponent } from './home-values.component';

describe('HomeValuesComponent', () => {
  let component: HomeValuesComponent;
  let fixture: ComponentFixture<HomeValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
