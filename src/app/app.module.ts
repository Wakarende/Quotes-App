import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
