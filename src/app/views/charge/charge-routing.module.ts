import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChargeComponent } from './charge.component';

const routes: Routes = [
  {
    path: '',
    component: ChargeComponent,
    data: {
      title: 'Charge'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargeRoutingModule { }
