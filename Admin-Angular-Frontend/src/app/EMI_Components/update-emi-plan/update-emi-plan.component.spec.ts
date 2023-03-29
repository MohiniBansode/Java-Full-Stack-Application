import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEMIPlanComponent } from './update-emi-plan.component';

describe('UpdateEMIPlanComponent', () => {
  let component: UpdateEMIPlanComponent;
  let fixture: ComponentFixture<UpdateEMIPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEMIPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEMIPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
