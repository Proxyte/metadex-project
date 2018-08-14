import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.css']
})
export class RaterComponent implements OnInit {

  property_list:any;

  constructor(private property:PropertyService,private router:Router) { }

  ngOnInit() {
    this.property_list = this.property.getProperty();
    console.log(this.property_list);
  }

  watchMore(val){
    this.router.navigate(['./more']);
  }

}
