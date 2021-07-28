import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { CustomCursorContainerComponent } from './custom-cursor-container.component';
import { CursorLocatorComponent } from './cursor-locator/cursor-locator.component';

@NgModule({
  declarations: [
    CustomCursorContainerComponent,
    CursorLocatorComponent
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    CursorLocatorComponent
  ]
})
export class CustomCursorModule { }
