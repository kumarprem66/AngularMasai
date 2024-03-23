import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  baseUrl:string = 'https://masaieval-fca0b-default-rtdb.firebaseio.com/'
  

  constructor(private http:HttpClient) { 

  }

  createUser(user:User){
    // it returns observable
    return this.http.post<User>(`${this.baseUrl}users.json`,user)
  }

  getUsers(){
    // it returns observable
    return this.http.get<User[]>(`${this.baseUrl}users.json`)
  }

  updateUser(user:User,userID:string){
    // it returns observable
    return this.http.post(`${this.baseUrl}users.json`,user)
  }

  deleteUser(userId:string){
    // it returns observable
    return this.http.post(`${this.baseUrl}users.json`,userId)
  }
}
