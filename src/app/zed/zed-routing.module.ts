import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZedPage } from './zed.page';

const routes: Routes = [
  {
    path: '',
    component: ZedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZedPageRoutingModule {}
