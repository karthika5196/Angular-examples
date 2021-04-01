import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-param',
  templateUrl: './routing-param.component.html',
  styleUrls: ['./routing-param.component.css']
})
export class RoutingParamComponent implements OnInit {
para=" ";
para2=" ";
  constructor(private activatedroute:ActivatedRoute) {
    this.activatedroute.params.subscribe(data=>{
      this.para=data.id;
      this.para2=data.id2;
    })
   }

  ngOnInit(): void {
  }

}
