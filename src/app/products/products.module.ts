import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';


const productsRoutes:Routes = [
  {
    path:'',
    component:ProductsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)

  ]
})
export class ProductsModule { }
