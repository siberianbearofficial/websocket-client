import {TestBed} from '@angular/core/testing';

import {MessageAdapterService} from './message-adapter.service';

describe('MessageAdapterService', () => {
  let service: MessageAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
