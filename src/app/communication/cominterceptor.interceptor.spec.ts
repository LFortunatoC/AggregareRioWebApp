import { TestBed } from '@angular/core/testing';

import { CominterceptorInterceptor } from './cominterceptor.interceptor';

describe('CominterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CominterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CominterceptorInterceptor = TestBed.inject(CominterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
