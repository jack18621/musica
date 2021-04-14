import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieDetailPageRoutingModule } from './categorie-detail-routing.module';

import { CategorieDetailPage } from './categorie-detail.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategorieDetailPage]
})
export class CategorieDetailPageModule {}
