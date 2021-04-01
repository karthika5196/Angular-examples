import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  forms: FormGroup;
  constructor(private fb: FormBuilder) {
    this.forms = fb.group({
      email: new FormControl(),
      password: new FormControl(),
      checkout: new FormControl()
    });

  }



  ngOnInit(): void {
  }

}
