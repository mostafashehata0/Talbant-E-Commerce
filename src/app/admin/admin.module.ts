import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpartComponent } from './component/adminpart/adminpart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

@NgModule({
  declarations: [AdminpartComponent, AddproductComponent, AdminlayoutComponent],
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  exports: [AdminpartComponent],
})
export class AdminModule {}
