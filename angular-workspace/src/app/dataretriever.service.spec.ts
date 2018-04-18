import { TestBed, inject } from '@angular/core/testing';

import { DataRetrieverService } from './dataretriever.service';

describe('DataRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRetrieverService]
    });
  });

  it('should be created', inject([DataRetrieverService], (service: DataRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
