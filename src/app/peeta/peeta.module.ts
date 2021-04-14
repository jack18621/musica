import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeetaPageRoutingModule } from './peeta-routing.module';

import { PeetaPage } from './peeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeetaPageRoutingModule
  ],
  declarations: [PeetaPage]
})
export class PeetaPageModule {}
