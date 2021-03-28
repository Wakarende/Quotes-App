
import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Quotes} from '../quotes'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quoteForm = new FormGroup ({
    name: new FormControl(''),
    quote: new FormControl(''),
    author: new FormControl('')
  });

  @Output() addQuote = new EventEmitter<Quotes>();
  newQuote = new Quotes('','','',new Date(),0,0,0)
  onSubmit() {
    this.addQuote.emit({...this.newQuote});
     
  }
  
 

  ////  onSubmit() {
  //   // this.addQuote.emit(this.newQuote)
  //   console.log(this.addQuote)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
