import { TestBed, inject } from '@angular/core/testing';

import { DataretrieverService } from './dataretriever.service';

describe('DataretrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataretrieverService]
    });
  });

  it('should be created', inject([DataretrieverService], (service: DataretrieverService) => {
    expect(service).toBeTruthy();
  }));
});
