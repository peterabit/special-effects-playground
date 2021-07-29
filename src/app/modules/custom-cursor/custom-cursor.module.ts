import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomCursorContainerComponent } from './custom-cursor-container.component';
import { CursorTrackerComponent } from './cursor-tracker/cursor-tracker.component';

@NgModule({
  declarations: [CustomCursorContainerComponent, CursorTrackerComponent],
  imports: [CommonModule, PortalModule, OverlayModule],
  exports: [CursorTrackerComponent],
})
export class CustomCursorModule {}
