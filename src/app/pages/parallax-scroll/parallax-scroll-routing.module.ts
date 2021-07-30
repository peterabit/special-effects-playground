import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParallaxScrollComponent } from './parallax-scroll.component';

const routes: Routes = [{ path: '', component: ParallaxScrollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParallaxScrollRoutingModule { }
