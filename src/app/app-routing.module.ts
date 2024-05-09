import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AllproductComponent } from './component/allproduct/allproduct.component';
import { LoginComponent } from './component/login/login.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './component/cart/cart.component';
import { MainlayoutComponent } from './component/mainlayout/mainlayout.component';
import { AdminpartComponent } from './admin/component/adminpart/adminpart.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminModule } from './admin/admin.module';
import { AddproductComponent } from './admin/component/addproduct/addproduct.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'AllProducts', component: AllproductComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },

  { path: 'login', component: LoginComponent },

  {
    path: 'fffff',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: 'adminpart',
    component: AdminpartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addproduct',
    component: AddproductComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
