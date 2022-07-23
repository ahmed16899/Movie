import { TestBed } from '@angular/core/testing';

import { GetresolverResolver } from './getresolver.resolver';

describe('GetresolverResolver', () => {
  let resolver: GetresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
