import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeotechnicalComponent } from './geotechnical.component';

describe('GeotechnicalComponent', () => {
  let component: GeotechnicalComponent;
  let fixture: ComponentFixture<GeotechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeotechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeotechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
