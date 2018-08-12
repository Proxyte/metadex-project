import { Injectable } from '@angular/core';
import { User } from './user';
import { Prerating }  from './prerating';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user:User[]=[
    {
      email:"admin",
      password:"admin"
    }
  ];


  getData(){
    return this.user;
  }

  constructor() { }
}
