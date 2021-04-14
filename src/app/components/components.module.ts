import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from '../components/quote/quote.component';
import { IonicModule } from '@ionic/angular';
import { TracksComponent } from './tracks/tracks.component';



@NgModule({
  declarations: [QuoteComponent, TracksComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[QuoteComponent, TracksComponent], 
})
export class ComponentsModule { }
