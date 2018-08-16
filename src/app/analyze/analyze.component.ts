import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  property_list:any;

  constructor(private property:PropertyService) { }

  ngOnInit() {
    this.property_list = this.property.getProperty();
  }

}
