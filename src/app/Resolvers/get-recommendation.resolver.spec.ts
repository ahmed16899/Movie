import { TestBed } from '@angular/core/testing';

import { GetRecommendationResolver } from './get-recommendation.resolver';

describe('GetRecommendationResolver', () => {
  let resolver: GetRecommendationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetRecommendationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
