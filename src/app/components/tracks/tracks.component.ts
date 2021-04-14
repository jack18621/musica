import { Component, OnInit, Input } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { ModalController, ToastController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {

  @Input() name
  @Input() href
  tracks = []
  constructor( private music: MusicService, private modalController: ModalController, public data: DataLocalService, private toastController: ToastController ) { }

  ngOnInit() {
    if(this.href){
      console.log(this.href);
      this.music.getTracks(this.href).subscribe( res =>{
        console.log(res);
        
        this.tracks = res['items'];
      });
    }else{
      this.data.cargarStorage();
      this.tracks = this.data.tracks;
    }
  }

  dismiss(){
    this.modalController.dismiss();
  }

  addTrack(track){
    this.data.addTrack(track);
    this.showToast('Añadido a favoritos');
  }

  deleteTrack(track){
    this.data.deleteTrack(track);
    this.showToast('Borrado de favoritos');

  }


  async showToast(message){
    let toast = await this.toastController.create({
      message,
      duration: 1500
    }) 
    toast.present();
  }

}
