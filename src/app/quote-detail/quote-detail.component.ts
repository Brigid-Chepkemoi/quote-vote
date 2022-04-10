import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  //input binding
@Input() quote:any;
@Input() post:any;

  @Output() remove= new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.remove.emit(complete);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
