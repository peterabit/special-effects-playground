import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxScrollRoutingModule } from './parallax-scroll-routing.module';
import { ParallaxScrollComponent } from './parallax-scroll.component';

@NgModule({
  declarations: [ParallaxScrollComponent],
  imports: [CommonModule, ParallaxScrollRoutingModule],
})
export class ParallaxScrollModule {}
