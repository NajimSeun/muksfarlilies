import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMissionVisionComponent } from './home-mission-vision.component';

describe('HomeMissionVisionComponent', () => {
  let component: HomeMissionVisionComponent;
  let fixture: ComponentFixture<HomeMissionVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMissionVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMissionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
