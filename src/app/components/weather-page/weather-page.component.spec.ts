import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherPageComponent } from './wheather-page.component';

describe('WheatherPageComponent', () => {
  let component: WheatherPageComponent;
  let fixture: ComponentFixture<WheatherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
