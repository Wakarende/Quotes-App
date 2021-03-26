import { Quote } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
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

  onSubmit() {
    console.warn(this.quoteForm.value)
  }
    
  constructor() { }

  ngOnInit(): void {
  }

}
