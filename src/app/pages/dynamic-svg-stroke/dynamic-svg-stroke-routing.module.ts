import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicSvgStrokeComponent } from './dynamic-svg-stroke.component';

const routes: Routes = [{ path: '', component: DynamicSvgStrokeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicSvgStrokeRoutingModule { }
