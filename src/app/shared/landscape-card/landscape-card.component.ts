import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-landscape-card',
  templateUrl: './landscape-card.component.html',
  styleUrls: ['./landscape-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandscapeCardComponent {
  @Input() title: string = '';

  @Input() image?: string;

  @Input() link?: string | any[];

  @Input() width: string = '270px';

  @Input() height: string = '160px';

  @Input() theme: 'dark' | 'light' = 'light';

  get bgImage() {
    return `url(${this.image})`;
  }

  constructor() {}
}
