import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes:Quotes;

   numberOfLikes:number= 0;
  likeButtonClick() {
    this.numberOfLikes++
  }
  dislikeButtonClick() {
    this.numberOfLikes--
  }
  constructor() { }

  ngOnInit(): void {
  }

}
