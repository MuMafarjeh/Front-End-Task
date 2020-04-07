import { ChargeRoutingModule } from './charge-routing.module';
import { ChargeComponent } from './charge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ChargeComponent],
  imports: [
    ChargeRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ButtonsModule.forRoot(),

  ]
})
export class ChargeModule { }
