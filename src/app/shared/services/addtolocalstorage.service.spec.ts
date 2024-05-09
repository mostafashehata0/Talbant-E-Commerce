import { TestBed } from '@angular/core/testing';

import { AddtolocalstorageService } from './addtolocalstorage.service';

describe('AddtolocalstorageService', () => {
  let service: AddtolocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtolocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
