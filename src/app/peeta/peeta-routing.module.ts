import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeetaPage } from './peeta.page';

const routes: Routes = [
  {
    path: '',
    component: PeetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeetaPageRoutingModule {}
