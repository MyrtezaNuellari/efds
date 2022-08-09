import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,PatternValidator,Validators} from'@angular/forms';

@Component({
  selector: 'app-formg',
  templateUrl: './formg.component.html',
  styleUrls: ['./formg.component.css']
  })

export class FormgComponent implements OnInit {
  addUserForm!: FormGroup;
  isFormSubmitted = false;
  PatternValidator: any ;

  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "[A-Z]{1,2}[0-9][0-9A-Z]s?[0-9][A-Z]{2,8}";

    this.addUserForm = this.fb.group({
   name:  ['', Validators.required],
   email: ['',Validators.required]
    });

}
onSubmit() {

  if (this.addUserForm.invalid){                                   
  return;
  } else {
    console.log('Form submitted')
  }
}
}