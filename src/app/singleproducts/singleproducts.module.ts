import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SingleproductsComponent } from './singleproducts.component';


const singleProductsRoutes:Routes = [
  {
    path:'',
    component:SingleproductsComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(singleProductsRoutes)
  ]
})
export class SingleproductsModule { }
