import { Component, ComponentRef } from '@angular/core';
import { CustomCursorRef } from './modules/custom-cursor/custom-cursor-ref';
import { CustomCursorService } from './modules/custom-cursor/custom-cursor.service';
import { RingCursorComponent } from './shared/ring-cursor/ring-cursor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private cursorRef?: CustomCursorRef<RingCursorComponent>;

  constructor(private cursor: CustomCursorService) {
    this.cursorRef = this.cursor.create<RingCursorComponent>(RingCursorComponent);
  }

  ngOnInit(): void {}

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
