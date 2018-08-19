import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { PropertyRoutingModule } from './property-routing.module';
import { BankComponent } from './bank/bank.component';
import { DescriptionComponent } from './description/description.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    PropertyRoutingModule,
    NgxPaginationModule,

  ],
  declarations: [
    RequestComponent,
    BankComponent,
    DescriptionComponent
  ],
  providers: [],
  bootstrap:[RequestComponent]
})
export class PropertyModule { }
