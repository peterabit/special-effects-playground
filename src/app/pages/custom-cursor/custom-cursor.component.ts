import { Component, ComponentRef, ElementRef, ViewChild } from '@angular/core';
import { CustomCursorRef } from 'src/app/modules/custom-cursor/custom-cursor-ref';
import { CustomCursorService } from 'src/app/modules/custom-cursor/custom-cursor.service';
import { RingCursorComponent } from 'src/app/shared/ring-cursor/ring-cursor.component';

@Component({
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
})
export class CustomCursorComponent {
  @ViewChild('btn') btn?: ElementRef<HTMLButtonElement>;

  fixCursorOnBtn = false;

  cursorPosition = { x: 0, y: 0 };

  get btnTransform(): string {
    if (!this.fixCursorOnBtn) return '';

    const { x, y } = this.btnCenter;
    return `translate(${this.cursorPosition.x - x}px, ${this.cursorPosition.y - y}px)`;
  }

  private btnCenter = { x: 0, y: 0 };

  private cursorRef?: CustomCursorRef<RingCursorComponent>;

  constructor(private cursor: CustomCursorService) {
    this.createCursor();
  }

  ngAfterViewInit(): void {
    this.btnCenter = this.getBtnCenter();
  }

  onClick() {
    if (this.cursorRef) {
      this.cursorRef.destroy();
      this.cursorRef = undefined;
    } else {
      this.createCursor();
    }
  }

  onMouseEnter() {
    if (this.cursorRef) {
      this.fixCursorOnBtn = true;

      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.updateSize(80);
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.color = 'burlywood';

      const { x, y } = this.btnCenter;
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.fix(x, y);
    }
  }

  onMouseLeave() {
    this.fixCursorOnBtn = false;

    if (this.cursorRef) {
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.updateSize(50);
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.unfix();
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.color = 'cadetblue';
    }
  }

  private createCursor() {
    this.cursorRef = this.cursor.create<RingCursorComponent>(RingCursorComponent);
    (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.cursorMove.subscribe(cursorPosition => {
      this.cursorPosition = cursorPosition;
    });
  }

  private getBtnCenter() {
    const btnEl = this.btn!.nativeElement;
    const { left, top } = btnEl.getBoundingClientRect();
    const width = btnEl.offsetWidth;
    const height = btnEl.offsetHeight;

    return { x: left + width / 2, y: top + height / 2 };
  }
}
