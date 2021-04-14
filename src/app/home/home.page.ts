import { Component } from '@angular/core';
import { PeetaPage } from '../peeta/peeta.page';
import { MePage } from '../me/me.page';
import { MusicPage } from '../music/music.page';
import { Router } from '@angular/router';
import { QuoteComponent } from '../components/quote/quote.component';
import { PopoverController } from '@ionic/angular';
import { QuotesService } from '../services/quotes.service';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  icon = "calendar"
  color = "secondary"
  peetaPage = PeetaPage
  mePage = MePage
  musicPage = MusicPage
  constructor(   private router: Router, private popoverController: PopoverController, private quoteService: QuotesService) {
    this.quoteService.getQuote();
  }


  change(event){
    switch (event.detail.index ) {
      case 0:
        this.color = 'secondary';
        this.icon = 'calendar'
        break;
      case 1:
        this.color = 'danger';
        this.icon = 'gift'
        break;
    
      default:
        this.color = 'success'
        break;
    }
    
  }

  async showQuote(){
    let quote;
    let icon;
    if(this.icon === 'gift'){
       quote = {
        author: 'Karen Zabaleta',
        quote: '¡Tu eres mi galeria!',
        tags:['bestFriends', 'myGallery', 'theBest', 'felizCumpleaños', 'elRabi', 'jugosElRabi'],
        background: '/assets/rabi.PNG'
      }
      icon = 'images';
    }else{
      quote = this.quoteService.quote;
      icon = 'book';

    }

    let popOver = await this.popoverController.create({
      component:QuoteComponent,
      componentProps:{
        quote,
        icon
      }
    });
    popOver.present();
  }

  logOut(){
    localStorage.setItem('usuario', 'false');
  }

}
