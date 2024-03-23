import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userFormData:FormGroup;

  constructor(private fb:FormBuilder){

    this.userFormData = this.fb.group({
      'firstName':['',[Validators.required]],
      'lastName':['',[Validators.required]],
      'email':['',[Validators.required,Validators.email]],
      'mobno':['',[Validators.required]],
      'password':['',[Validators.required]]
    })
    
  }

  onSubmit(){

  }

}
