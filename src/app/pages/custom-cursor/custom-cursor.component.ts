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

  private cursorRef?: CustomCursorRef<RingCursorComponent>;

  constructor(private cursor: CustomCursorService) {
    this.cursorRef = this.cursor.create<RingCursorComponent>(RingCursorComponent);
  }

  onClick() {
    if (this.cursorRef) {
      this.cursorRef.destroy();
      this.cursorRef = undefined;
    } else {
      this.cursorRef = this.cursor.create<RingCursorComponent>(RingCursorComponent);
    }
  }

  onMouseEnter() {
    if (this.cursorRef) {
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.updateSize(80);
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.color = 'burlywood';

      const btnEl = this.btn!.nativeElement;
      const top = btnEl.offsetTop - window.scrollY;
      const left = btnEl.offsetLeft - window.scrollX;
      const width = btnEl.offsetWidth;
      const height = btnEl.offsetHeight;
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.fix(left + width / 2, top + height / 2);
    }
  }

  onMouseLeave() {
    if (this.cursorRef) {
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.updateSize(50);
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.unfix();
      (this.cursorRef.contentRef as ComponentRef<RingCursorComponent>).instance.color = 'cadetblue';
    }
  }
}
