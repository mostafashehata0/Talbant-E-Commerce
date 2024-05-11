import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SelectComponent } from './component/select/select.component';
import { HomeComponent } from './component/home/home.component';
import { RouterLink } from '@angular/router';
import { SpinerComponent } from './spiner/spiner.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule, NgModel } from '@angular/forms';
import { AddtocartComponent } from './component/addtocart/addtocart.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SelectComponent,
    HomeComponent,
    SpinerComponent,
    ProductComponent,
    AddtocartComponent,
  ],
  imports: [CommonModule, RouterLink, FormsModule],
  exports: [
    NavbarComponent,
    HomeComponent,
    SpinerComponent,
    AddtocartComponent,
    SelectComponent,
    ProductComponent,
    FormsModule,
  ],
})
export class SharedModule {}
