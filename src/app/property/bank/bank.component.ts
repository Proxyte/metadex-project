import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  coming_data:any;
  banks:any;
  initial_slice = 0;

  constructor(private property:PropertyService) { }

  ngOnInit() {
    this.coming_data = this.property.getItem();
    console.log(this.coming_data);
    this.banks = this.property.getBanks();
  }

  selectBanks(val){
    let bank_items = this.property.getBanks();
    console.log(bank_items);
    let array = document.getElementsByClassName('images');
    let marks = document.getElementsByClassName('mark-image');
    let name_companies = document.getElementsByClassName('name-companies');
    console.log(name_companies);

    for(let k = 0;k<name_companies.length;k++){
      if(k===val){
        this.coming_data[0].banks = name_companies[k].innerHTML;
      }
      else{
      }
    }

    for(let j=0;j<marks.length;j++) {
      if (j == val) {
        array[j].classList.add('make-image-grey');
        marks[j].classList.add('mark-image-visible');
      }
      else {
        array[j].classList.remove('make-image-grey');
        marks[j].classList.remove('mark-image-visible');
      }
    }
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
    if(this.initial_slice>=this.property.getBanks().length){
      this.initial_slice = 0;
    }
  }

}
