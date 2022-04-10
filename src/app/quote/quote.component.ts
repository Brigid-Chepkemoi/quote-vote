import { Component,  Input, OnInit,  } from '@angular/core';
import { Quotes } from '../quote-class/quote-class.component';
import { quotes } from '../quote-list';
import { QuoteServiceComponent} from '../quote-service/quote-service.component';
import { AlertServiceComponent } from '../alert-service/alert-service.component';
import { HttpClient } from '@angular/common/http';
// import { Quote } from '../quote-class/quote-class.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  addNewQuote(quotes: Quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    this.quotes.push(quotes)
  }
  
  //toogle details
  toggleDetails(index:number){
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }
//delete details
//will be triggered when event is captured
deleteQuote(remove:any, index:number){
  if (remove){
    let alertMessage =confirm("Are you sure you want to delete this Quote?");
    if(alertMessage){
      this.quotes.splice(index,1);
      this.alertService.alertMe("The goal has been deleted")
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


quotes:Quotes[];
alertService:AlertServiceComponent;

constructor(quoteservice:QuoteServiceComponent, alertService:AlertServiceComponent, private http:HttpClient) {
  this.quotes = quoteservice.getQuotes()
  this.alertService = alertService;

}

  ngOnInit(){

    interface ApiResponse{
      writter:string;
      quotess:string;
    }

    this.http.get<ApiResponse>("http://quoets.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quotes(data.writter, data.quotess,)
    }
    ,err=>{
        this.quote = new Quotes("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
  }
  }