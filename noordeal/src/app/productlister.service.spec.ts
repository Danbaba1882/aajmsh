import { TestBed } from '@angular/core/testing';

import { ProductlisterService } from './productlister.service';

describe('ProductlisterService', () => {
  let service: ProductlisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
