import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import {MyValidators} from "./customValidators/customvalidators.validators";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  signUpForm:FormGroup;
  formdata;

  get username(){
    return this.signUpForm.get('username');
  }

  constructor(fb:FormBuilder){
   /* this.signUpForm = new FormGroup({
      username : new FormControl('', [Validators.required, Validators.minLength(3), MyValidators.cannotContainSpace], ),
      password : new FormControl('', Validators.required),
      contact : new FormGroup({
          email : new FormControl(),
          mobile : new FormControl()
      })
    })*/

   /*this.signUpForm = new FormGroup({
     "username" : new FormControl(),
     "password" : new FormControl()
   })*/

   this.signUpForm = fb.group({
     "username" : ['abc', [Validators.required, Validators.minLength(3), MyValidators.cannotContainSpace], MyValidators.unameShouldBeUnique],
     "password" : [],
     "contact" : fb.group({
          "email" : [],
          "mobile" : []
     })
   })

  }

  onFormSubmit(){
    this.formdata = this.signUpForm.value;
    console.log(this.signUpForm)
  }

}
