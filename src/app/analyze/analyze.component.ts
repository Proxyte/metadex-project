import { Component, OnInit,ViewChild } from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {


  @ViewChild('dropbtn') dropbtn;

  dropdown = false;

  dropdownMenuArray = [
    {
      name:'На торг'
    },
    {
      name:'На финансовые условия'
    },
    {
      name:'На время продажи'
    },
    {
      name:'На услуги риелтора'
    },
    {
      name:'На общую площадь'
    },
    {
      name:'На этажность квартиры'
    },
    {
      name:'На год постройки'
    },
    {
      name:'На техническое состояние'
    },
  ];

  property_list:any;

  changesArray=[
    {
      name:'На переданные имущественные права'
    }
  ];

  constructor(private property:PropertyService) { }

  ngOnInit() {
    this.property_list = this.property.getProperty();
  }

  openDropDownMenu(){
    document.body.style.overflow = 'hidden';
    if(this.dropdown==false){
      this.dropdown = true;
    }
    else{
      this.dropdown = false;
    }
  }

  addChanges(item,val){
    this.changesArray.push(item);
    this.dropdownMenuArray.splice(val,1);
    this.dropdown = false;
    document.body.style.overflow = 'auto';
    if(this.dropdownMenuArray.length==0){
      this.dropbtn.nativeElement.className = 'hide';
    }
    // console.log(item);
    // console.log(val);
  }

}
