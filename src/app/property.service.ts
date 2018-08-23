import { Injectable } from '@angular/core';
import { Property } from './property';
import { Prerating }  from './prerating';
import { Companies } from './companies';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  date  = new Date();
  month = this.date.getUTCMonth()+1;
  day = this.date.getUTCDate();
  year = this.date.getUTCFullYear();

  private company:Companies[]=[
    {
      url:'assets/img/vk.png',
      name:'Kazakhstan Appraisal',
    },
    {
      url:'assets/img/vk.png',
      name:'Каспий Магнат'
    },
    {
      url:'assets/img/vk.png',
      name:'Центр оценки Алматы'
    },
    {
      url:'assets/img/vk.png',
      name:'4'
    },
    {
      url:'assets/img/vk.png',
      name:'5'
    },
    {
      url:'assets/img/vk.png',
      name:'6'
    },
    {
      url:'assets/img/vk.png',
      name:'7'
    },
    {
      url:'assets/img/vk.png',
      name:'8'
    },


  ];

  private prerating:Prerating[]=[
    {
      address:123123,
      square:123123,
      countroom:123132,
      year:123123,
      initial_stage:13212321,
      end_stage:312312,
      type:312,
    }
  ];

  private banks: Bank[]=[
    {
      url:"/assets/img/kaspi.png",
      name:"Kaspi bank"
    },
    {
      url:"/assets/img/qazkom.png",
      name:"Qazkom"
    },
    {
      url:"/assets/img/homecredit.png",
      name:"Homecredit Bank"
    },
    {
      url:"/assets/img/kaspi.png",
      name:"BCT bank"
    },
    {
      url:"/assets/img/qazkom.png",
      name:"Halyk"
    },
    {
      url:"/assets/img/homecredit.png",
      name:"Antoher Bank"
    }
  ];

  private item:Property[] =[];

  private property: Property[]=[
    {
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, 11-мкр,51-дом",
      square:25,
      count_room:5,
      initial_stage:1,
      end_stage:6,
      type:"different",
      bathroom:"different",
      tech_status:"different",
      layout:"different",
      companies:'Kazakhstan appraisal',
      banks:''
    },
    {
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },
    {
      date: this.day + "." + this.month + "." + this.year,
      address: "г.Актобе, ДСК",
      square: 50,
      count_room: 6,
      initial_stage: 1,
      end_stage: 6,
      type: "diff",
      bathroom: "diff",
      tech_status: "diff",
      layout: "diff",
      companies: 'Центр оценки',
      banks: ''
    },
    {
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },
    {
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },
    {
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },
    {
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    },{
      date:this.day+"."+this.month+"."+this.year,
      address:"г.Актобе, ДСК",
      square:50,
      count_room:6,
      initial_stage:1,
      end_stage:6,
      type:"diff",
      bathroom:"diff",
      tech_status:"diff",
      layout:"diff",
      companies:'Центр оценки',
      banks:''
    }
    // {
    //   date:1111,
    //   address:"12mkr",
    //   square:50,
    //   count_room:6,
    //   initial_stage:1,
    //   end_stage:6,
    //   type:"diff",
    //   bathroom:"diff",
    //   tech_status:"diff",
    //   layout:"diff",
    //   companies:''
    // },
    // {
    //   date:1111,
    //   address:"12mkr",
    //   square:50,
    //   count_room:6,
    //   initial_stage:1,
    //   end_stage:6,
    //   type:"diff",
    //   bathroom:"diff",
    //   tech_status:"diff",
    //   layout:"diff",
    //   companies:''
    // }
  ];

  getProperty(){
    return this.property;
  }

  getPreProperty(){
    return this.prerating;
  }

  getCompanies(){
    return this.company;
  }

  getBanks(){
    return this.banks;
  }

  getItem(){
    return this.item;
  }

  constructor() { }
}
