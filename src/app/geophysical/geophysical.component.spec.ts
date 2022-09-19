import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeophysicalComponent } from './geophysical.component';

describe('GeophysicalComponent', () => {
  let component: GeophysicalComponent;
  let fixture: ComponentFixture<GeophysicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeophysicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeophysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
