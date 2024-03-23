import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { User } from '../Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{


  userFormData:FormGroup;
  isUpdating:boolean = false;
  users:User[] = []

  constructor(private fb:FormBuilder,private fire:FirebaseServiceService,private router:Router){

    this.userFormData = this.fb.group({
      'firstName':['',[Validators.required]],
      'lastName':['',[Validators.required]],
      'email':['',[Validators.required,Validators.email]],
      'mobno':['',[Validators.required,Validators.minLength(10)]],
      'password':['',[Validators.required,Validators.minLength(5)]]
    })
    
  }
  ngOnInit(): void {
    this.getAllUsers()
  }

  onSubmit(){

    // this give all the data of the form
    const userData = this.userFormData.value;

    // storing this data into firabase
    this.fire.createUser(userData).subscribe((res)=>{

      alert("User Created Successfully")
      this.getAllUsers();

    })
    
  }

  getAllUsers(){
    this.fire.getUsers().subscribe((res)=>{

      // converting object of object into list of objects
      const listOfObjects = Object.keys(res).map(key => {
        return { id: key, ...res[key] };
     });

     if(listOfObjects.length>0){
      this.users = listOfObjects;

     }
    
    })
  }

  deleteUser(user: User) {
    
    }
    updateUser(user: User) {
    
    }

}
