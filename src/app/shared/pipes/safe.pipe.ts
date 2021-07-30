import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, type: 'url' | 'style' = 'url'): SafeUrl | SafeStyle {
    if (type === 'url') {
      return this.domSanitizer.bypassSecurityTrustUrl(value);
    } else if (type === 'style') {
      return this.domSanitizer.bypassSecurityTrustStyle(value);
    } else {
      throw new Error(`${type} type not allow`);
    }
  }
}
