import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor = "#79CBCA";
   }
}
