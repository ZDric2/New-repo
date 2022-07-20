import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IPage } from './i.page';

const routes: Routes = [
  {
    path: '',
    component: IPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IPageRoutingModule {}
