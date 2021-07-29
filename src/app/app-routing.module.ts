import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-cursor',
    loadChildren: () => import('./pages/custom-cursor/custom-cursor.module').then(m => m.CustomCursorModule),
  },
  {
    path: 'parallax-scroll',
    loadChildren: () => import('./pages/parallax-scroll/parallax-scroll.module').then(m => m.ParallaxScrollModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
