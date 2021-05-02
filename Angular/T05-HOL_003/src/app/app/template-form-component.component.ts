import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-template-form-component',
  templateUrl: './template-form-component.component.html',
  styleUrls: ['./template-form-component.component.css']
})
export class TemplateFormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countryData:any[]=['India','US','UK']
  model={
    address:"",
    country:"",
    agreement:""
  }
  onFormSubmit(){
    console.log(this.model)
  }

}
