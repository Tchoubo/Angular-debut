import { TestBed } from '@angular/core/testing';

import { InscripInterceptor } from './inscrip.interceptor';

describe('InscripInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InscripInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InscripInterceptor = TestBed.inject(InscripInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
