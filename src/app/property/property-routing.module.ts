import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestComponent} from './request/request.component';
import {BankComponent} from './bank/bank.component';
import {DescriptionComponent} from './description/description.component';


const links: Routes = [
  {
    path:'property',
    children:[
      {
        path:"**",
        component:RequestComponent
      },
    ],
  },
  {
    path:"bank",
    component:BankComponent
  },
  {
    path:"description",
    component:DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(links)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
