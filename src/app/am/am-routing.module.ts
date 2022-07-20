import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmPage } from './am.page';

const routes: Routes = [
  {
    path: '',
    component: AmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmPageRoutingModule {}
