import { Component, ComponentRef } from '@angular/core';
import { CustomCursorRef } from 'src/app/modules/custom-cursor/custom-cursor-ref';
import { CustomCursorService } from 'src/app/modules/custom-cursor/custom-cursor.service';
import { RingCursorComponent } from 'src/app/shared/ring-cursor/ring-cursor.component';

@Component({
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
})
export class CustomCursorComponent {
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
    (this.cursorRef?.contentRef as ComponentRef<RingCursorComponent>)?.instance.updateSize(80);
  }

  onMouseLeave() {
    (this.cursorRef?.contentRef as ComponentRef<RingCursorComponent>)?.instance.updateSize(50);
  }
}
