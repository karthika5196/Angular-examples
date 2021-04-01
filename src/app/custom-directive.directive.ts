import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  constructor(private el:ElementRef) { }
  ngOnInit(): void {
this.el.nativeElement.style.background="red";
  }


}
