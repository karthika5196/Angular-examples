import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-search',
  templateUrl: './routing-search.component.html',
  styleUrls: ['./routing-search.component.css']
})
export class RoutingSearchComponent implements OnInit {
name="";
tag="";
country="";
  constructor(private activatedroute:ActivatedRoute) { 
    this.activatedroute.queryParams.subscribe(data=>{
      this.name=data.name;
      this.tag=data.tag;
      this.country=data.country;
    })
  }

  ngOnInit(): void {
  }

}
