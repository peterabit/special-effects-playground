import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicSvgStrokeRoutingModule } from './dynamic-svg-stroke-routing.module';
import { DynamicSvgStrokeComponent } from './dynamic-svg-stroke.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DynamicSvgStrokeComponent],
  imports: [CommonModule, DynamicSvgStrokeRoutingModule, SharedModule],
})
export class DynamicSvgStrokeModule {}
