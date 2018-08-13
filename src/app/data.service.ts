import { Injectable } from '@angular/core';
import {User, UserComp} from './user';
import { Prerating }  from './prerating';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users_comp:UserComp[]=[
    {
      email:'comp',
      password:'comp',
      status:false
    }
  ]

  private users:User[]=[
    {
      email:"admin",
      password:"admin",
      status:false
    },
    {
      email:"nurbol",
      password:"nurbol",
      status:false
    }
  ];

  private user:User[]=[];


  getData(){
    return this.users;
  }

  getUser(){
    return this.user;
  }

  getUserComp(){
    return this.users_comp;
  }


  constructor() { }
}
