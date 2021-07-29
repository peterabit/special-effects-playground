import {
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Optional,
  TemplateRef,
} from '@angular/core';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CustomCursorContainerComponent } from './custom-cursor-container.component';
import { CustomCursorConfig } from './custom-cursor-config';
import { CustomCursorRef } from './custom-cursor-ref';

export const CURSOR_REPLACEMENT_DEFAULT_OPTIONS = new InjectionToken<CustomCursorConfig>('CustomCursorConfig');

export const CURSOR_REPLACEMENT_DATA = new InjectionToken<any>('custom-cursor-data');

let uId = 0;

@Injectable({
  providedIn: 'root',
})
export class CustomCursorService {
  cuscomCursorRefs: CustomCursorRef<any>[] = [];

  constructor(
    private injector: Injector,
    private overlay: Overlay,
    @Optional() @Inject(CURSOR_REPLACEMENT_DEFAULT_OPTIONS) private defaultOptions: CustomCursorConfig | undefined
  ) {}

  create<T, D = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config?: CustomCursorConfig<D>
  ): CustomCursorRef<T> {
    config = { ...(this.defaultOptions || new CustomCursorConfig()), ...config };

    const overlayRef = this.createOverlay();
    const container = this.attachCursorContainer<D>(overlayRef, config);
    const contentRef = this.attachCursorContent<T>(componentOrTemplateRef, container.instance, config);

    const customCursorRef = new CustomCursorRef(this.uId, contentRef, container.instance, overlayRef, config);
    this.cuscomCursorRefs.push(customCursorRef);
    customCursorRef.afterDestroy.subscribe(() => this.destroyCustomCursor(customCursorRef));

    return customCursorRef;
  }

  destroy(idOrRef: string | CustomCursorRef<any>) {
    if (idOrRef instanceof CustomCursorRef) {
      this.destroyCustomCursor(idOrRef);
    } else {
      const cursorRef = this.cuscomCursorRefs.find(({ id }) => id === idOrRef);

      if (cursorRef) {
        this.destroyCustomCursor(cursorRef);
      }
    }
  }

  get uId() {
    return `custom-curser-${uId++}`;
  }

  private destroyCustomCursor(cursorRef: CustomCursorRef<any>) {
    cursorRef.overlayRef.detach();
    this.cuscomCursorRefs = this.cuscomCursorRefs.filter(ref => ref !== cursorRef);
  }

  private attachCursorContainer<D>(overlay: OverlayRef, config: CustomCursorConfig<D>) {
    const injector = Injector.create({
      providers: [
        {
          provide: CustomCursorConfig,
          useValue: config,
        },
      ],
      parent: this.injector,
    });

    const containerRef = overlay.attach(
      new ComponentPortal<CustomCursorContainerComponent>(CustomCursorContainerComponent, null, injector)
    );

    return containerRef;
  }

  private attachCursorContent<T>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    container: CustomCursorContainerComponent,
    config: CustomCursorConfig
  ): ComponentRef<T> | EmbeddedViewRef<T> {
    if (componentOrTemplateRef instanceof TemplateRef) {
      return container.attach<T>(new TemplatePortal<T>(componentOrTemplateRef, null!, config.data));
    } else {
      const injector = Injector.create({
        providers: [
          {
            provide: CURSOR_REPLACEMENT_DATA,
            useValue: config.data,
          },
        ],
        parent: this.injector,
      });

      return container.attach<T>(new ComponentPortal<T>(componentOrTemplateRef, config.viewContainerRef, injector));
    }
  }

  private createOverlay(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: false,
    });
  }
}
