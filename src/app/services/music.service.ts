import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  token;
  categories;
  constructor( private http: HttpClient ) { 
  }

  getToken(){
    this.http.get('https://spotify-get-token.herokuapp.com/spotify/6493b54ca3fc4e94bac485bd9dad947f/5ae5ba86e3c748af9d93c369142f0166').subscribe(res =>{
      this.token = res['access_token'];
      console.log(this.token);
      
      this.getCategories();
    });
  }

  getCategories(){
    const headers= new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    this.http.get('https://api.spotify.com/v1/browse/categories', {headers}).subscribe(res =>{
     this.categories = res['categories'].items; 
     console.log(res);
      
    });
  }

  getPlaylist(id){
    const headers= new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get('https://api.spotify.com/v1/browse/categories/'+ id + '/playlists', {headers});
  }


  getTracks(url){
    const headers= new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, {headers});
  }
}
