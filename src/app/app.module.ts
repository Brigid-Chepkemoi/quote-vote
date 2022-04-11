import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { TimecountPipe } from './timecount.pipe';
import { HighlightDirective } from './highlight.directive';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
// import { NgProgressModule } from '@ngx-progressbar/core';
// 
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
  
    TimecountPipe,
  
    HighlightDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgProgressModule,
    // NgProgressHttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }