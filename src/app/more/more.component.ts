import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  property_list

  constructor(private property:PropertyService) { }

  ngOnInit() {
    this.property_list = this.property.getProperty();
  }

}
