import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

  myformData;

  onSubmit(myform:NgForm){
   // console.log("Submit button clicked")
    console.log(myform)
    this.myformData = myform.value;
  }
}
