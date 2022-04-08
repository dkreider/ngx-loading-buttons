import { TestBed } from '@angular/core/testing';

import { NgxLoadingButtonsService } from './ngx-loading-buttons.service';

describe('NgxLoadingButtonsService', () => {
  let service: NgxLoadingButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoadingButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
