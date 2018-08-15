import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationComponent} from '../registration/registration.component';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {User} from '../user';

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
  }

  checkData(){
    let object = this.data.getData();
    let email = this.email.nativeElement;
    let password = this.password.nativeElement;
    let send_user = this.data.getUser();
    send_user.pop();
    let userObj = new User();


    for(let i=0;i<object.length;i++){
      if(email.value == object[i].email && password.value == object[i].password){
        userObj.email = email.value;
        userObj.password = password.value;
        userObj.status = true;
        send_user.push(userObj);
        this.router.navigate(['./property']);
        break;
      }
      else{
        this.warning = true;
      }
    }
  }

}
