import {Component, OnInit, ViewChild} from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  data = [];
  stepIndex = 1;
  warning :any;
  latitude = 43.229863;
  longitude = 76.867707;
  locationChosen = false;
  selected:any;
  style:any;
  initial_slice = 0;
  date = new Date();
  year_sys = this.date.getFullYear();
  month = this.date.getMonth();
  day = this.date.getDay();



  company = [];

  @ViewChild('address') address;
  @ViewChild('square') square;
  @ViewChild('countroom') countroom;
  @ViewChild('initialstage') initialstage;
  @ViewChild('endstage') endstage;
  @ViewChild('type') type;
  @ViewChild('sanuzel') sanuzel;
  @ViewChild('techstatus') techstatus;
  @ViewChild('plan') plan;
  @ViewChild('steps') steps;
  @ViewChild('stepblock') stepblock;
  @ViewChild('alert') alert;

  blocks = document.getElementsByClassName('step-block');


  constructor(private property:PropertyService) { }

  ngOnInit() {
    this.property.getCompanies();
    this.company = this.property.getCompanies();
    this.data = this.property.getProperty();
    this.property.getProperty();
    console.log(this.property.getProperty());
    this.warning = false;
    this.blocks[this.stepIndex].classList.add('color');
    let name_companies = document.getElementsByClassName('name-companies');
    console.log(name_companies.item(0));
  }

  chooseCompanies(index){
    if(index=="+1"){
      this.initial_slice = this.initial_slice+3;
    }
    else{
      this.initial_slice = this.initial_slice-3;
    }
    if(this.initial_slice<0){
      this.initial_slice = 0;
    }
    if(this.initial_slice>this.property.getCompanies().length){
      this.initial_slice = 0;
    }
  }

  collectInput() {
    let propObj = new Property();
    let address = this.address.nativeElement;
    let square = this.square.nativeElement;
    let countroom = this.countroom.nativeElement;
    let initialstage = this.initialstage.nativeElement;
    let endstage = this.endstage.nativeElement;
    let type = this.type.nativeElement;
    let sanuzel = this.sanuzel.nativeElement;
    let techstatus = this.techstatus.nativeElement;
    let plan = this.plan.nativeElement;

    if (address.value == '' || square.value == ''
      || countroom.value == ''
      || initialstage.value == ''
      || endstage.value == ''
      || type.value == '' || sanuzel.value == ''
      || techstatus.value == '' || plan.value == '') {
      console.log(this.warning);
      this.warning = true;
      window.scrollTo(0, 0);
      console.log(this.warning);
      // this.alert.nativeElement.addclassName = 'show';
    }

    else {
      propObj.date = this.day+"."+this.month+"."+this.year_sys;
      propObj.address = address.value;
      propObj.bathroom = sanuzel.value;
      propObj.count_room = countroom.value;
      propObj.initial_stage = initialstage.value;
      propObj.end_stage = endstage.value;
      propObj.type = type.value;
      propObj.tech_status = techstatus.value;
      propObj.layout = plan.value;

      this.data.push(propObj);
      console.log(this.data);
      this.warning = false;
      this.stepIndex++;
      this.blocks[this.stepIndex].classList.add('color');
    }
  }

  selectCompany(item,val){
    let list_items = this.property.getProperty();
    console.log(list_items);
    let array = document.getElementsByClassName('images');
    let marks = document.getElementsByClassName('mark-image');
    let name_companies = document.getElementsByClassName('name-companies');

    console.log(marks);
    for(let i = 0 ; i<marks.length;i++){
      console.log(marks[i]);
    }

    for(let j=0;j<marks.length;j++){
      if(j==val){
        array[j].classList.add('make-image-grey');
        marks[j].classList.add('mark-image-visible');
      }
      else{
        array[j].classList.remove('make-image-grey');
        marks[j].classList.remove('mark-image-visible');
      }
    }

    for(let k = 0;k<name_companies.length;k++){
      if(k===val){
        this.data[list_items.length-1].companies.second = name_companies[k].innerHTML;
        console.log(list_items);
      }
      else{
      }
    }
  }

  nextStage(){
    this.stepIndex++;
    this.blocks[this.stepIndex].classList.add('color');
  }

  onChooseLocation(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

}
