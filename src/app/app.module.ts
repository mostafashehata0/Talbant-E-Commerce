import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterLink } from '@angular/router';
import { AllproductComponent } from './component/allproduct/allproduct.component';
import { LoginComponent } from './component/login/login.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './component/cart/cart.component';
import { MainlayoutComponent } from './component/mainlayout/mainlayout.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AdminpartComponent } from './admin/component/adminpart/adminpart.component';
import { PaymentComponent } from './component/payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AllproductComponent,
    LoginComponent,
    InformationComponent,
    DetailsComponent,
    CartComponent,
    MainlayoutComponent,

    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBfw3DwY6rR10TWJAkvz_7Gv_ybEpNqw5Y',
      authDomain: 'authanrication2.firebaseapp.com',
      projectId: 'authanrication2',
      storageBucket: 'authanrication2.appspot.com',
      messagingSenderId: '550919511769',
      appId: '1:550919511769:web:1aa4336fa64fe70e03a8c8',
      measurementId: 'G-5WKYPJBD3B',
    }),
    AngularFireAuthModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
