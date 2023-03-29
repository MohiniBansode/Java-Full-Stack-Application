import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMIPlanDetailsComponent } from './emi-plan-details.component';

describe('EMIPlanDetailsComponent', () => {
  let component: EMIPlanDetailsComponent;
  let fixture: ComponentFixture<EMIPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMIPlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMIPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
