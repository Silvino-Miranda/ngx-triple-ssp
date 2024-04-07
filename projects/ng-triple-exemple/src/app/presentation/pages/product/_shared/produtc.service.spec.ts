/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdutcService } from './produtc.service';

describe('Service: Produtc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutcService]
    });
  });

  it('should ...', inject([ProdutcService], (service: ProdutcService) => {
    expect(service).toBeTruthy();
  }));
});
