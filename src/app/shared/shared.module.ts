import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomCursorModule } from '../modules/custom-cursor/custom-cursor.module';
import { RingCursorComponent } from './ring-cursor/ring-cursor.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LandscapeCardComponent } from './landscape-card/landscape-card.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [RingCursorComponent, PageHeaderComponent, LandscapeCardComponent, SafePipe],
  imports: [CommonModule, RouterModule, CustomCursorModule],
  exports: [CustomCursorModule, RingCursorComponent, PageHeaderComponent, LandscapeCardComponent, SafePipe],
})
export class SharedModule {}
