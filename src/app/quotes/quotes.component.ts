import { Component, OnInit, } from '@angular/core';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes: Quotes[] = [
  //  new Quotes('Joy', 'If it is to be, it is up to me', 'Joy'),
  //  new Quotes('Joy','If sticks and stones can break my bones, then words can never hurt me', 'Burens')
 ]
 

 addNewQuote(quotes:any) {
   quotes.length = this.quotes.length;
   quotes.id = quotes.length + 1;
   this.quotes.push(quotes)
 }
  constructor() { }

  ngOnInit(): void {
  }

}
