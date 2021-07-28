import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ring-cursor',
  templateUrl: './ring-cursor.component.html',
  styleUrls: ['./ring-cursor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RingCursorComponent implements OnInit {
  @Input() ringSize = 50;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  updateSize(size: number) {
    this.ringSize = size;
    this.cd.markForCheck();
  }
}
