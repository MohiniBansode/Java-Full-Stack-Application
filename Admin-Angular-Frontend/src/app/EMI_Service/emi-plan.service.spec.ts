import { TestBed } from '@angular/core/testing';

import { EMIPlanService } from './emi-plan.service';

describe('EMIPlanService', () => {
  let service: EMIPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMIPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
