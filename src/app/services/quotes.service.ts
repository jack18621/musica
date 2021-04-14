import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quote;
  constructor( private http: HttpClient ) { }

  getQuote(){
    this.http.get('https://quotes.rest/qod').subscribe((res)=>{
      this.quote = res['contents'].quotes[0];
      
    });
  }
}
