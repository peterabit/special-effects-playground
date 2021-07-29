import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren,
  EventEmitter,
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
export class RingCursorComponent {
  @ViewChildren(CursorTrackerComponent) cursorTrackers?: QueryList<CursorTrackerComponent>;

  @Input() ringSize = 50;

  @Input() color = 'cadetblue';

  @Output() cursorMove = new EventEmitter<{ x: number; y: number }>();

  isFix = false;

  get x(): number {
    return this._x;
  }

  set x(v: number) {
    if (this._x !== v) {
      this._x = v;
      this.cursorMove.emit({ x: v, y: this.y });
    }
  }

  _x = 0;

  get y(): number {
    return this._y;
  }

  set y(v: number) {
    if (this._y !== v) {
      this._y = v;
      this.cursorMove.emit({ y: v, x: this.x });
    }
  }

  _y = 0;

  fixX = 0;
  fixY = 0;

  constructor(private cd: ChangeDetectorRef) {}

  updateSize(size: number) {
    this.ringSize = size;
    this.cd.markForCheck();
  }

  fix(x: number, y: number) {
    this.isFix = true;
    this.x = x;
    this.fixX = x;
    this.y = y;
    this.fixY = y;
    this.cd.markForCheck();
  }

  unfix() {
    this.isFix = false;
    this.cd.markForCheck();
  }

  onCursorMove({ x, y }: CursorMoveEvent) {
    this.x = x;
    this.y = y;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.isFix) return;

    const offsetX = this.getLogOffset(e.clientX, this.fixX);
    const offsetY = this.getLogOffset(e.clientY, this.fixY);

    if (offsetX !== -Infinity) {
      this.x = this.fixX + offsetX;
    }

    if (offsetY !== -Infinity) {
      this.y = this.fixY + offsetY;
    }
  }

  private getLogOffset(a: number, b: number) {
    const offset = a - b;
    const sign = Math.sign(offset);
    const absLog = getBaseLog(1.5, Math.abs(offset));

    return sign > 0 ? absLog : -absLog;
  }
}

function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}
