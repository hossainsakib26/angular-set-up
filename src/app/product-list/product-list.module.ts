import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: '*', component: ProductListComponent},
]

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductListModule { }
