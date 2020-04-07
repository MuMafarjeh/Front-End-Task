import { TransferMoneyComponent } from './transfer-money.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TransferMoneyComponent,
    data: {
      title: 'TransferMoney'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferMoneyRoutingModule { }
