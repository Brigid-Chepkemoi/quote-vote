import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() isDeleted=new EventEmitter<boolean>();

  quoteDelete(remove:boolean){
    this.isDeleted.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}