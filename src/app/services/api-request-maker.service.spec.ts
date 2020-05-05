import { TestBed } from '@angular/core/testing';

import { ApiRequestMakerService } from './api-request-maker.service';

describe('ApiRequestMakerService', () => {
  let service: ApiRequestMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRequestMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
