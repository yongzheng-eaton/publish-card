import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCardsComponent } from './publish-cards.component';

describe('PublishCardsComponent', () => {
  let component: PublishCardsComponent;
  let fixture: ComponentFixture<PublishCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
