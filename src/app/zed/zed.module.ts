import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZedPageRoutingModule } from './zed-routing.module';

import { ZedPage } from './zed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZedPageRoutingModule
  ],
  declarations: [ZedPage]
})
export class ZedPageModule {}
