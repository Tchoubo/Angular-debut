import { TestBed } from '@angular/core/testing';

import { ObtenirvillesService } from './obtenirvilles.service';

describe('ObtenirvillesService', () => {
  let service: ObtenirvillesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenirvillesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
