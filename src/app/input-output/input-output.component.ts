import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
@Input() public full;
@Input() public mail;
@Output() public send = new EventEmitter();

senddetailstoparent(){

  this.send.emit("This is an example for output");

}
public test="Angular";
  constructor() { }
  
  ngOnInit(): void {
  }

}
