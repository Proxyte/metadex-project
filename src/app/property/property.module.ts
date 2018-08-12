import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { PropertyRoutingModule } from './property-routing.module';
import { BankComponent } from './bank/bank.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  imports: [
    CommonModule,
    PropertyRoutingModule,
  ],
  declarations: [
    RequestComponent,
    BankComponent,
    DescriptionComponent,
  ],
  providers: [],
  bootstrap:[RequestComponent]
})
export class PropertyModule { }
