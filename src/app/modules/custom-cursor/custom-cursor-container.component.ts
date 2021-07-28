import { Component, ChangeDetectionStrategy, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { CustomCursorConfig } from './custom-cursor-config';

@Component({
  selector: 'app-custom-cursor-container',
  templateUrl: './custom-cursor-container.component.html',
  styleUrls: ['./custom-cursor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCursorContainerComponent {
  currentPortal?: Portal<unknown>;

  isShow = true;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public config: CustomCursorConfig,
    private cd: ChangeDetectorRef
  ) {}

  show() {
    this.isShow = true;
    this.cd.markForCheck();
  }

  hide() {
    this.isShow = false;
    this.cd.markForCheck();
  }

  attachPortal<T>(protal: TemplatePortal<T> | ComponentPortal<T>) {
    this.currentPortal = protal;
  }
}
