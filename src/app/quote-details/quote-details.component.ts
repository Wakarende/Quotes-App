import { Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes:Quotes;

  @Output() deleteRequest = new EventEmitter<boolean>();
  deleteQuote(del: boolean) {
    this.deleteRequest.emit(del);
  }
  upvote() {
    this.quotes.upvotes ++
  }
  downvote() {
    this.quotes.downvotes ++
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
