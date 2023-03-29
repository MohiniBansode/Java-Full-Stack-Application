import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMIPlanListComponent } from './emi-plan-list.component';

describe('EMIPlanListComponent', () => {
  let component: EMIPlanListComponent;
  let fixture: ComponentFixture<EMIPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMIPlanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMIPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
