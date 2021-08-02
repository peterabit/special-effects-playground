import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'custom-cursor',
    loadChildren: () => import('./pages/custom-cursor/custom-cursor.module').then(m => m.CustomCursorModule),
  },
  {
    path: 'parallax-scroll',
    loadChildren: () => import('./pages/parallax-scroll/parallax-scroll.module').then(m => m.ParallaxScrollModule),
  },
  {
    path: 'dynamic-svg-stroke',
    loadChildren: () =>
      import('./pages/dynamic-svg-stroke/dynamic-svg-stroke.module').then(m => m.DynamicSvgStrokeModule),
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
