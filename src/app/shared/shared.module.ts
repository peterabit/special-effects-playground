import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingCursorComponent } from './ring-cursor/ring-cursor.component';
import { CustomCursorModule } from '../modules/custom-cursor/custom-cursor.module';



@NgModule({
  declarations: [
    RingCursorComponent
  ],
  imports: [
    CommonModule,
    CustomCursorModule
  ],
  exports: [CustomCursorModule, RingCursorComponent]
})
export class SharedModule { }
