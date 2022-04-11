import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  //input binding
@Input() quote:Quotes;
// @Input() post:any;

@Output() isDeleted=new EventEmitter<boolean>();

quoteDelete(remove:boolean){
  this.isDeleted.emit(remove);
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
