import { Component,  Input, OnInit,  } from '@angular/core';



import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes: Quotes[] = [
    new Quotes(1, "When you have a dream, you’ve got to grab it and never let go","Carol Burnest", 16 ,2,"Brigid Chepkemoi",new Date(2022,  4, 10)),
    new Quotes(2, "“In a gentle way, you can shake the world.”", "Mahatma Gandhi",24, 6,"Brigid Chepkemoi",new Date(2022,  8, 1, 12, 49, 10)),
    new Quotes(3, "If life were predictable it would cease to be life, and be without flavor. ", "Eleanor Roosevelt",30,4,"Brigid Chepkemoi",new Date(2022,  7, 2, 12, 49, 10))
   ];
  addNewQuote(quote){
    let quotesLength=this.quotes.length+1;
    let quoteObj=new Quotes(quotesLength,quote.quote,quote.author,0,0,quote.submission,new Date());
    this.quotes.push(quoteObj);
    
  }
  
  //toogle details
  toggleDetails(index:number){
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }

deleteQuote(isDeleted, index) {
  if (isDeleted) {
    let toDelete = confirm(
      `Are you sure you want to delete this ${this.quotes[index].quote}?`
    );
    if (toDelete) {
      this.quotes.splice(index, 1);
  
    }
  }
}
@Input() quote:any;

likes:number =0;
upVote(){
  this.likes++;//likes increament
}

dislikes:number =0;
downVote(){
  this.dislikes++;//dislike increment
}





ngOnInit(): void {}
}

