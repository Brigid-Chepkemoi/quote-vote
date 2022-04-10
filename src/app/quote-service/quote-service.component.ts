import { Injectable } from '@angular/core';
import { quotes } from '../quote-list';
import { Quotes } from '../quote-class/quote-class.component';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceComponent {
getQuotes(){
return quotes
}
  constructor() { }
}
