import { TestBed } from '@angular/core/testing';

import { GetTrendingResolver } from './get-trending.resolver';

describe('GetTrendingResolver', () => {
  let resolver: GetTrendingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetTrendingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
