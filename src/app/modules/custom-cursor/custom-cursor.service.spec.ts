import { TestBed } from '@angular/core/testing';

import { CustomCursorService } from './custom-cursor.service';

describe('CustomCursorService', () => {
  let service: CustomCursorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomCursorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
