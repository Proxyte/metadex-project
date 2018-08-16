import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  property_list;
  latitude = 43.229863;
  longitude = 76.867707;
  locationChosen = false;

  constructor(private property:PropertyService) { }

  ngOnInit() {
    this.property_list = this.property.getProperty();
  }

  onChooseLocation(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

}
