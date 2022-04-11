import { Component,  Input, OnInit,  } from '@angular/core';

import { QuoteServiceComponent} from '../quote-service/quote-service.component';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes: Quotes[] = [
    new Quotes(1, "When you have a dream, you’ve got to grab it and never let go","Carol Burnest", 16 ,2,"Brigid Chepkemoi",new Date(2022,  6, 6)),
    new Quotes(2, "“In a gentle way, you can shake the world.”", "Mahatma Gandhi",24, 6,"Brigid Chepkemoi",new Date(2022,  6, 6, 12, 49, 10)),
    new Quotes(3, "If life were predictable it would cease to be life, and be without flavor. ", "Eleanor Roosevelt",30,4,"Brigid Chepkemoi",new Date(2022,  6, 6, 12, 49, 10))
   ];
  addNewQuote(quote){
    let quotesLength=this.quotes.length+1;
    let quoteObj=new Quotes(quotesLength,quote.quote,quote.author,0,0,quote.submission,new Date());
    this.quotes.push(quoteObj);
    // let quotesLength = this.quote.length;
    // quote.id = quotesLength+1;
    // this.quotes.push(quote)
  }
  
  //toogle details
  toggleDetails(index:number){
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }
//delete details
//will be triggered when event is captured
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


// quotess:Quotes[];
// alertService:AlertServiceComponent;

// constructor(quoteservice:QuoteServiceComponent, alertService:AlertServiceComponent, private http:HttpClient) {
//   this.quote = quoteservice.getQuotes()
//   this.alertService = alertService;

// }


ngOnInit(): void {}
}
  // ngOnInit(){

  //   interface ApiResponse{
  //     writter:string;
  //     quotess:string;
  //   }

  //   this.http.get<ApiResponse>("http://quoets.stormconsultancy.co.uk/random.json").subscribe(data=>{
  //     // Succesful API request
  //     this.quote = new Quotes(data.writter, data.quotess,)
  //   }
  //   ,err=>{
  //       this.quote = new Quote("Winston Churchill","Never never give up!")
  //       console.log("An error occurred")
  //   })
  // }
  // }
