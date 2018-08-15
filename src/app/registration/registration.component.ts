import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user:User;

  @ViewChild('password') password;
  @ViewChild('email') email;
  @ViewChild('underpass') underpass;
  @ViewChild('underemail') undermail;
  @ViewChild('content') content;
  @ViewChild('seconddiv') seconddiv;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData();
    document.getElementById('second-div').style.display = 'none';
  }

  getUsers(){
    this.data.getData();
  }

  checkInputs(){
    let list_users = this.data.getData();
    let objUser = new User();

    let pass = this.password.nativeElement;
    let mail = this.email.nativeElement;
    let err_pass = this.underpass.nativeElement;
    let err_mail = this.undermail.nativeElement;

    if(pass.value =='' && mail.value == ''){
      err_pass.innerHTML = 'Введите пароль';
      err_mail.innerHTML = 'Введите электронную почту';
      err_pass.className = 'danger';
      err_mail.className = 'danger';
    }

    if(pass.value.length<6){
      err_pass.innerHTML = 'Длина вашего пароля меньше 6 символов';
      err_pass.className = 'danger';
    }

    else{
      err_pass.className = 'fine';
      err_mail.className = 'fine';
      objUser.email = mail.value;
      objUser.password = pass.value;
      list_users.push(objUser);

      mail.value = "";
      pass.value = "";
      document.getElementById('content').style.display = 'none';
      document.getElementById('second-div').style.display = 'block';
    }
  }

}
