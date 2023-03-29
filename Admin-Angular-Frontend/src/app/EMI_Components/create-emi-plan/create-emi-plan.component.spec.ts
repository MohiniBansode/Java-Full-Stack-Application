import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEMIPlanComponent } from './create-emi-plan.component';

describe('CreateEMIPlanComponent', () => {
  let component: CreateEMIPlanComponent;
  let fixture: ComponentFixture<CreateEMIPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEMIPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEMIPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
