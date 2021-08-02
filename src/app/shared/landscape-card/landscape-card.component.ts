import { Component, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landscape-card',
  templateUrl: './landscape-card.component.html',
  styleUrls: ['./landscape-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandscapeCardComponent {
  @Input() title: string = '';

  @Input() img?: string;

  @Input() link?: string | any[];

  @Input() width: string = '270px';

  @Input() height: string = '160px';

  @Input() color: 'dark' | 'light' = 'light';

  get bgImage() {
    return `url(${this.img})`;
  }

  constructor() {}
}
