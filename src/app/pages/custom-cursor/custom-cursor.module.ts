import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCursorRoutingModule } from './custom-cursor-routing.module';
import { CustomCursorComponent } from './custom-cursor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomCursorModule as CursorModule } from '../../modules/custom-cursor/custom-cursor.module';

@NgModule({
  declarations: [CustomCursorComponent],
  imports: [CommonModule, CustomCursorRoutingModule, SharedModule, CursorModule],
})
export class CustomCursorModule {}
