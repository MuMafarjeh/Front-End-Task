import { TransferMoneyRoutingModule } from './transfer-money-routing.module';
import { TransferMoneyComponent } from './transfer-money.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
@NgModule({

  imports: [
    FormsModule,
    TransferMoneyRoutingModule,
    ChartsModule,
    BsDropdownModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [TransferMoneyComponent]
})
export class TransferMoneyModule { }
