import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  InjectionToken,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export interface CursorMoveEvent {
  x: number;
  y: number;

  mouseMoveEvent?: MouseEvent;
}

@Component({
  selector: 'app-cursor-tracker',
  templateUrl: './cursor-tracker.component.html',
  styleUrls: ['./cursor-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorTrackerComponent implements OnChanges {
  @Input() sticky = true;

  @Input() enableTransition = false;

  @Input() transition = 'transform 0.8s cubic-bezier(.19,1,.22,1)';
  // tslint:disable-next-line: variable-name
  _transition: SafeStyle;

  @Output() cursorMove = new EventEmitter<CursorMoveEvent>();

  x = 0;
  y = 0;

  get transform() {
    return `translate(${this.x}px, ${this.y}px)`;
  }

  constructor(private cd: ChangeDetectorRef, private domSanitizer: DomSanitizer) {
    this._transition = domSanitizer.bypassSecurityTrustStyle(this.transition);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.transition) {
      this._transition = this.domSanitizer.bypassSecurityTrustStyle(changes.transition as unknown as string);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  private mousemoveHandler(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;

    this.cursorMove.emit({
      x: this.x,
      y: this.y,
      mouseMoveEvent: e,
    });

    this.cd.markForCheck();
  }
}
