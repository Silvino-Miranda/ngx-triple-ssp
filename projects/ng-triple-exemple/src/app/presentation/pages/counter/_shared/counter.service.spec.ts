/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CounterService } from './counter.service';

describe('Service: Counter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService]
    });
  });

  it('should ...', inject([CounterService], (service: CounterService) => {
    expect(service).toBeTruthy();
  }));
});
