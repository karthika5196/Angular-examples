import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable,interval } from 'rxjs';
import { map,take } from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  date$=interval(2000).pipe(map(x=> new Date()),take(10))

  jsonData=this.http.get('https://jsonplaceholder.typicode.com/todos/3');

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }
  title = 'employee';
  public display=false;
  public name="";
  public email="";
  public fullname="Karthika";
  public receivedata=" ";
  public day= new Date();
  public num= 23456.901234;
  public obj={fname:"karthika" ,lname:"manickavel",age:24};
  public arr=[90,80,99,100];

}
