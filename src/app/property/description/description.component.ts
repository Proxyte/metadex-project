import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../property.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  all_data = [];
  reports = [];
  coming_data:any;

  constructor(private property:PropertyService,private router:Router) { }

  ngOnInit() {
    this.coming_data = this.property.getItem();
    console.log(this.coming_data);
    this.reports= this.property.getProperty();
    console.log(this.all_data);
  }

}
