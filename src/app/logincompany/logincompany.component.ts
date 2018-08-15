import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.css']
})
export class LogincompanyComponent implements OnInit {

  @ViewChild('login') login;
  @ViewChild('password') password;

  users = [];

  constructor(private data:DataService,private router:Router) { }

  ngOnInit() {
    this.users = this.data.getUserComp();
  }

  checkData(){
    let login = this.login.nativeElement;
    let password = this.password.nativeElement;
    for(let i=0;i<this.users.length;i++){
      if(login.value == this.users[i].email && password.value == this.users[i].password){
        this.router.navigate(['./rater']);
      }
    }
  }

}
