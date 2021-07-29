import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentRef, EmbeddedViewRef, EventEmitter } from '@angular/core';
import { CustomCursorConfig } from './custom-cursor-config';
import { CustomCursorContainerComponent } from './custom-cursor-container.component';

export class CustomCursorRef<T> {
  afterDestroy = new EventEmitter();

  constructor(
    public readonly id: string,
    public contentRef: ComponentRef<T> | EmbeddedViewRef<T>,
    public container: CustomCursorContainerComponent,
    public overlayRef: OverlayRef,
    public config: CustomCursorConfig
  ) {}

  destroy() {
    this.afterDestroy.emit();
  }
}
