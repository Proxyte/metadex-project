import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationComponent} from '../registration/registration.component';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  warning :any;

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private data:DataService,private router:Router) { }

  ngOnInit() {
    this.data.getData();
    console.log(this.data.getData());
  }

  checkData(){
    let object = this.data.getData();
    let email = this.email.nativeElement;
    let password = this.password.nativeElement;
    for(var key in object){
      if(email.value == object[key].email && password.value == object[key].password){
        this.router.navigate(['./property']);
        break;
      }
      else{
        email ='';
        password = '';
        this.warning = true;
      }
    }
  }

}
