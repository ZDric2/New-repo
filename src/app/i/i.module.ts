import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IPageRoutingModule } from './i-routing.module';

import { IPage } from './i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IPageRoutingModule
  ],
  declarations: [IPage]
})
export class IPageModule {}
