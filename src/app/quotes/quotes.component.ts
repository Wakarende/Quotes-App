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
   new Quotes('Joy', 'There is no sadder sight than a young pessimist', 'Mark Twain',new Date(2021,2,26),0,0,0),
   new Quotes('Preston','A chain is no stronger than its weakest link, and life is after all a chain', 'William James',new Date(2021,2,25),0,0,0),
   new Quotes('Burens','The landscape belongs to the person who looks are it', 'Ralph Waldo Emerson', new Date(2021,2,27),0,0,0),
   new Quotes('James','Civilizaiton is a limiteless multiplication of unnecessary necessities', 'Mark Twain', new Date(2021,2,24),0,0,0),
 ]
 
 addNewQuote(quotes:any) {
   quotes.length = this.quotes.length;
   quotes.id = quotes.length + 1;
   this.quotes.push(quotes)
 }
 
 
  quoteDelete(deleteRequest:boolean, index:number) {
    deleteRequest = confirm('Are you sure you want to delete this?')
    if(deleteRequest == true){
      this.quotes.splice(index,1)
    }
  }

firstNumber: number;
secondNumber: number;
counter: number;

highestUpvote() {
  this.firstNumber = 0
  this.secondNumber= 0

  for(this.counter = 0; this.counter < this.quotes.length; this.counter ++){
    this.secondNumber = this.quotes[this.counter].upvotes;
    if(this.secondNumber > this.firstNumber) {this.firstNumber = this.secondNumber}
  }
  return this.firstNumber
}

  constructor() { }

  ngOnInit(): void {
  }

}
