import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  tracks = [];
  constructor() { }

  cargarStorage(){
    this.tracks = JSON.parse(localStorage.getItem('tracks')) || [];
  }

  guardarStorage(){
    localStorage.setItem('tracks', JSON.stringify(this.tracks));
  }

  addTrack(track){
    this.tracks.unshift(track);
    this.guardarStorage();
  }

  deleteTrack(tr){
    for (let i = 0; i < this.tracks.length; i++) {
      if( this.tracks[i].track.id === tr.track.id ){
        this.tracks.splice(i, 1);
      }
    }
    this.guardarStorage();
  }

  checkTrack(tr){
    return this.tracks.find( track => track.track.id === tr.track.id ? true: false);
  }

}
