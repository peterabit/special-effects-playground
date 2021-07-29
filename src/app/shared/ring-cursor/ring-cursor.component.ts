import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  CursorMoveEvent,
  CursorTrackerComponent,
} from 'src/app/modules/custom-cursor/cursor-tracker/cursor-tracker.component';

@Component({
  selector: 'app-ring-cursor',
  templateUrl: './ring-cursor.component.html',
  styleUrls: ['./ring-cursor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RingCursorComponent implements OnInit {
  @ViewChildren(CursorTrackerComponent) cursorTrackers?: QueryList<CursorTrackerComponent>;

  @Input() ringSize = 50;

  @Input() color = 'cadetblue';

  isFix = false;

  fixPosition = { x: 0, y: 0 };

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  updateSize(size: number) {
    this.ringSize = size;
    this.cd.markForCheck();
  }

  fix(x: number, y: number) {
    this.isFix = true;
    this.fixPosition = { x, y };
    this.cd.markForCheck();
  }

  unfix() {
    this.isFix = false;
    this.cd.markForCheck();
  }

  onCursorMove(e: CursorMoveEvent) {
    this.fixPosition = { x: e.x, y: e.y };
  }
}
