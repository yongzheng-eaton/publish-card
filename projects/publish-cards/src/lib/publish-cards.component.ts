import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-publish-cards',
  templateUrl: './publish-cards.component.html',
  styleUrls: ['./publish-cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PublishCardsComponent implements OnInit {
  @Input() title!: string;
  @Input() name!: string;
  @Input() imgstr!: string;
  constructor() {}

  ngOnInit(): void {}
}
