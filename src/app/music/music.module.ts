import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicPageRoutingModule } from './music-routing.module';

import { MusicPage } from './music.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MusicPage]
})
export class MusicPageModule {}
