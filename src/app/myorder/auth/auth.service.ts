import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUser(){
    let user = localStorage.getItem('LOGGED_IN_USER');
    if(user != null){
      return JSON.parse(user);
    }
    return null;
  }
  
}