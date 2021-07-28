import { Component } from '@angular/core';
import { CustomCursorService } from './modules/custom-cursor/custom-cursor.service';
import { RingCursorComponent } from './shared/ring-cursor/ring-cursor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(cursor: CustomCursorService) {
    cursor.replace(RingCursorComponent)
  }
}
