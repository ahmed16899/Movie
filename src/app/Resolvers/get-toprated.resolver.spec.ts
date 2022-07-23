import { TestBed } from '@angular/core/testing';

import { GetTopratedResolver } from './get-toprated.resolver';

describe('GetTopratedResolver', () => {
  let resolver: GetTopratedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetTopratedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
