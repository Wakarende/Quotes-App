import { getParseErrors } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter,Input} from '@angular/core';
import { Quotes} from '../quotes'
import { Pipe, PipeTransform } from '@angular/core';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes: Quotes[] = [
   new Quotes('Joy', 'There is no sadder sight than a young pessimist', 'Mark Twain'),
   new Quotes('Preston','A chain is no stronger than its weakest link, and life is after all a chain', 'William James')
 ]
 
 addNewQuote(quotes:any) {
   quotes.length = this.quotes.length;
   quotes.id = quotes.length + 1;
   this.quotes.push(quotes)
 }
 
 
  @Output() deleteRequest = new EventEmitter<Boolean>();

  deleteQuote(deleteRequest, index:number, ) {
    
    if(deleteRequest){
      var remove = confirm('Are you sure you want to delete this?')
    }if(remove == true){
      this.quotes.splice(index,1)
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
