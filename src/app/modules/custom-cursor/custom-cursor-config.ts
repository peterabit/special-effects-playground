import { ViewContainerRef } from '@angular/core';

export class CustomCursorConfig<D = any> {
  // Where the attached component should live in Angular's logical component tree.
  // This affects what is available for injection and the change detection order for the component instantiated inside of the dialog.
  // This does not affect where the dialog content will be rendered.
  viewContainerRef?: ViewContainerRef;

  data?: D | null = null;
}
