import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Optional,
  TemplateRef,
} from '@angular/core';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { CustomCursorContainerComponent } from './custom-cursor-container.component';
import { CustomCursorConfig } from './custom-cursor-config';

export const CURSOR_REPLACEMENT_DEFAULT_OPTIONS = new InjectionToken<CustomCursorConfig>('CustomCursorConfig');

export const CURSOR_REPLACEMENT_DATA = new InjectionToken<any>('custom-cursor-data');

@Injectable({
  providedIn: 'root',
})
export class CustomCursorService {
  cursorContainer?: ComponentRef<CustomCursorContainerComponent>;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) private document: Document,
    @Optional() @Inject(CURSOR_REPLACEMENT_DEFAULT_OPTIONS) private defaultOptions: CustomCursorConfig | undefined
  ) {}

  replace<T, D = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: CustomCursorConfig<D>) {
    config = { ...(this.defaultOptions || new CustomCursorConfig()), ...config };

    if (this.cursorContainer) {
      this.attachCursorContent<T>(componentOrTemplateRef, this.cursorContainer, config);
    } else {
      this.cursorContainer = this.attachCursorContainer<D>(config);
      this.attachCursorContent<T>(componentOrTemplateRef, this.cursorContainer, config);
    }
  }

  hide() {
    if (this.cursorContainer) {
      this.cursorContainer.instance.hide();
    }
  }

  show() {
    if (this.cursorContainer) {
      this.cursorContainer.instance.show();
    }
  }

  private attachCursorContainer<D>(config: CustomCursorConfig<D>) {
    const injector = Injector.create({
      providers: [
        {
          provide: CustomCursorConfig,
          useValue: config,
        },
      ],
      parent: this.injector,
    });

    const compFactory = this.componentFactoryResolver.resolveComponentFactory(CustomCursorContainerComponent);
    const cursorContainer = compFactory.create(injector);

    this.document.body.appendChild(cursorContainer.instance.viewContainerRef.element.nativeElement);
    this.appRef.attachView(cursorContainer.hostView);

    return cursorContainer;
  }

  private attachCursorContent<T>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    container: ComponentRef<CustomCursorContainerComponent>,
    config: CustomCursorConfig
  ) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      container.instance.attachPortal<T>(new TemplatePortal<T>(componentOrTemplateRef, null!, config.data));
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

      container.instance.attachPortal(
        new ComponentPortal<T>(componentOrTemplateRef, config.viewContainerRef, injector)
      );
    }
  }
}
