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
   new Quotes('Joy', 'There is no sadder sight than a young pessimist', 'Mark Twain',new Date(2021,2,26)),
   new Quotes('Preston','A chain is no stronger than its weakest link, and life is after all a chain', 'William James',new Date(2021,2,25)),
   new Quotes('Burens','The landscape belongs to the person who looks are it', 'Ralph Waldo Emerson', new Date(2021,2,27)),
   new Quotes('James','Civilizaiton is a limiteless multiplication of unnecessary necessities', 'Mark Twain', new Date(2021,2,24)),
 ]
 
 addNewQuote(quotes:any) {
   quotes.length = this.quotes.length;
   quotes.id = quotes.length + 1;
   this.quotes.push(quotes)
 }
 
 
  @Output() deleteRequest = new EventEmitter<Boolean>();

  deleteQuote(deleteRequest, index:number,) {
    
    if(deleteRequest){
      var remove = confirm('Are you sure you want to delete this?')
    }if(remove == true){
      this.quotes.splice(index,1)
    }
  }
// @Input() quote:Quotes[];
// likeButtonClick() {
//     this.quotes.upvotes ++;
//   }
//   dislikeButtonClick() {
//     this.quotes.downvotes ++;
//   }
  // numberOfLikes:number= 0;
  // likeButtonClick() {
  //   this.numberOfLikes++
  // }
  // dislikeButtonClick() {
  //   this.numberOfLikes--
  // }
  // upvote(){
  //   this.quotes.like++
  // }
  // downvote(){
  //   this.quotes.dislike++
  // }

  // upvote(index){
  //   var up = this.quotes[index].upvote+1;
  //   this.quotes[index].upvote = up]
  // }

  // downvote(index){
  //   var down = this.quotes[index].downvote+1;
  //   this.quotes[index].downvote = down;
  // }
  

  constructor() { }

  ngOnInit(): void {
  }

}
