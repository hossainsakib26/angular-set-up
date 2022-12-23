import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: CheckoutComponent},
  {path: '*', component: CheckoutComponent}
]

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CheckoutModule { }
