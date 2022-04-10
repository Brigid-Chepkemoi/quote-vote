import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert-service/alert.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteServiceComponent } from './quote-service/quote-service.component';
import { QuoteClassComponent } from './quote-class/quote-class.component';
import { DatePipe } from './date.pipe';
import { AlertServiceComponent } from './alert-service/alert-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    QuoteServiceComponent,
    QuoteClassComponent,
    DatePipe,
    AlertServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
