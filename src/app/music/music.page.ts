import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { TracksComponent } from '../components/tracks/tracks.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  constructor( public music: MusicService, private modalController: ModalController) {
    this.music.getToken()
   }

  ngOnInit() {
  }

  async favorites(){
    let modal = await this.modalController.create({
      component: TracksComponent,
      componentProps:{
        name:'Favoritos'
      }
    })

    modal.present();
  }

}
