import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { TracksComponent } from '../components/tracks/tracks.component';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.page.html',
  styleUrls: ['./categorie-detail.page.scss'],
})
export class CategorieDetailPage implements OnInit {

  id;
  name;
  playlists;
  constructor( private activated: ActivatedRoute, private music: MusicService, private modalController: ModalController) { }

  ngOnInit() {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.name = this.activated.snapshot.paramMap.get('name');
    this.music.getPlaylist(this.id).subscribe( res =>{
      this.playlists =res['playlists'].items
      console.log(res);
      
    });
  }

  async tracks(href, name){
    let modal = await this.modalController.create({
      component: TracksComponent,
      componentProps:{
        href,
        name
      }
    });
    modal.present();
  }

}
