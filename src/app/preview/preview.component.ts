import {Component, OnInit, ViewChild} from '@angular/core';
import {PropertyService} from '../property.service';
import {Router} from '@angular/router';
import { Prerating} from '../prerating';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @ViewChild('address') address;
  @ViewChild('square') square;
  @ViewChild('countroom') countroom;
  @ViewChild('year') year;
  @ViewChild('initialstage') initialstage;
  @ViewChild('endstage') endstage;
  @ViewChild('type') type;

  stepRate = 0;
  latitude = 43.229863;
  longitude = 76.867707;
  locationChosen = false;
  warning :boolean = false;

  constructor(private data:PropertyService,private router:Router) { }

  ngOnInit() {
  }

  onChooseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  rateProperty(){
    let list_pre_data = this.data.getPreProperty();
    let preObj = new Prerating();
    let address = this.address.nativeElement;
    let square = this.square.nativeElement;
    let countroom = this.countroom.nativeElement;
    let year = this.year.nativeElement;
    let initialstage = this.initialstage.nativeElement;
    let endstage = this.endstage.nativeElement;
    let type = this.type.nativeElement;


    if(address.value=='' && square.value=='' && countroom.value=='' && year.value=='' &&
      initialstage.value=='' && endstage.value=='' && type.value=='')
    {
      this.warning = true;
    }
    else{
      preObj.address = address.value;
      preObj.square = square.value;
      preObj.countroom = countroom.value;
      preObj.year = year.value;
      preObj.initial_stage = initialstage.value;
      preObj.end_stage = endstage.value;
      preObj.type = type.value;
      list_pre_data.push(preObj);
      console.log(list_pre_data);
      this.router.navigate(["./preresult"]);
    }
  }


}
