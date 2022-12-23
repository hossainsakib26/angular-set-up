import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: '*', component: ProductComponent},
]

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductModule { }
