/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TanksService } from './tanks.service';

describe('TanksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TanksService]
    });
  });

  it('should ...', inject([TanksService], (service: TanksService) => {
    expect(service).toBeTruthy();
  }));
});
