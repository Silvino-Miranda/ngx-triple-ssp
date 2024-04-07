import { TestBed } from '@angular/core/testing';

import { NgxTripleSspService } from './ngx-triple-ssp.service';

describe('NgxTripleSspService', () => {
  let service: NgxTripleSspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTripleSspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
