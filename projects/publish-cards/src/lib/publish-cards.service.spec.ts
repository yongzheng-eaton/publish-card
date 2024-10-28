import { TestBed } from '@angular/core/testing';

import { PublishCardsService } from './publish-cards.service';

describe('PublishCardsService', () => {
  let service: PublishCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
