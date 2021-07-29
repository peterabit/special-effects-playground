import {
  Component,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ChangeDetectorRef,
  ViewChild,
  ComponentRef,
  EmbeddedViewRef,
} from '@angular/core';
import { CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { CustomCursorConfig } from './custom-cursor-config';

@Component({
  selector: 'app-custom-cursor-container',
  templateUrl: './custom-cursor-container.component.html',
  styleUrls: ['./custom-cursor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCursorContainerComponent {
  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet?: CdkPortalOutlet;

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

  attach<T>(protal: TemplatePortal<T> | ComponentPortal<T>): ComponentRef<T> | EmbeddedViewRef<T> {
    return this.portalOutlet?.attach(protal);
  }
}
