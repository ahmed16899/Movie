import { TestBed } from '@angular/core/testing';

import { GetTrendingTVResolver } from './get-trending-tv.resolver';

describe('GetTrendingTVResolver', () => {
  let resolver: GetTrendingTVResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetTrendingTVResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
