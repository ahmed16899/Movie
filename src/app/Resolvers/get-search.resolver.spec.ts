import { TestBed } from '@angular/core/testing';

import { GetSearchResolver } from './get-search.resolver';

describe('GetSearchResolver', () => {
  let resolver: GetSearchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetSearchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
