import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmPageRoutingModule } from './am-routing.module';

import { AmPage } from './am.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmPageRoutingModule
  ],
  declarations: [AmPage]
})
export class AmPageModule {}
