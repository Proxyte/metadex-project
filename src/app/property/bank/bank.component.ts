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

    for(let j=0;j<marks.length;j++){
      if(j==val){
        marks[j].classList.add('mark-image-visible');
      }
      else{
        marks[j].classList.remove('mark-image-visible');
      }
    }
    console.log(this.coming_data);
  }

}
