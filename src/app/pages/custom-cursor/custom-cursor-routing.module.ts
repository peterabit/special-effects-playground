import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCursorComponent } from './custom-cursor.component';

const routes: Routes = [
  {
    path: '',
    component: CustomCursorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomCursorRoutingModule {}
