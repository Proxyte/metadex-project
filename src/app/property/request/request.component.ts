import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PropertyService } from '../../property.service';
import { Router } from '@angular/router';
import {Bank} from '../../bank';
import {Property} from '../../property';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  authorized = false;
  user = this.data.getUser();
  status_user = this.user[0].status;
  reports:any;

  constructor(private property:PropertyService,private data:DataService,private router:Router) { }

  ngOnInit() {
    this.authorized = this.status_user;
    if(this.user.length==0){
      this.authorized = false;
    }
    console.log(this.authorized);
    this.property.getItem();
    this.reports = this.property.getProperty();
  }


  checkUser(){
    let user = this.data.getUser();
    console.log("Stauts"+user[0].status);
    if(user[0].status === true){
      this.authorized = true;
    }
    else{
      this.authorized = false;
    }
  }

  chooseBank(val){
    let list_item = this.property.getItem();
    list_item.pop();
    let objProp = new Property();
    objProp = this.reports[val];
    list_item.push(objProp);
    if(list_item.length>0){
      list_item = [];
      list_item.push(objProp);
    }
    else{
      list_item.push(objProp);
    }
    this.router.navigate(['./bank']);
  }

  watchMore(val){
    let list_item = this.property.getItem();
    list_item.pop();
    let objProp = new Property();
    objProp = this.reports[val];
    list_item.push(objProp);
    if(list_item.length>0){
      list_item = [];
      list_item.push(objProp);
    }
    else{
      list_item.push(objProp);
    }
    this.router.navigate(['./description']);
  }

}
