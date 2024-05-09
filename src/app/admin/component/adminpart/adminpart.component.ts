import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthanticationservicesService } from 'src/app/services/authanticationservices.service';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { GetproductService } from 'src/app/services/getproduct.service';

@Component({
  selector: 'app-adminpart',
  templateUrl: './adminpart.component.html',
  styleUrls: ['./adminpart.component.css'],
})
export class AdminpartComponent implements OnInit {
  carts: any[] = [];
  form!: FormGroup;
  details: any[] = [];
  allProducts: any[] = [];

  constructor(
    private auth: AuthanticationservicesService,
    private router: Router,
    private serv: CartServicesService,
    private build: FormBuilder,
    private productServ: GetproductService
  ) {}
  ngOnInit(): void {
    this.getAllCarts();

    this.form = this.build.group({
      start: [''],
      end: [''],
    });
  }

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  logout() {
    // Call the logout method from the authentication service
    this.auth.logout().subscribe(() => {
      // Remove the token from localStorage
      localStorage.removeItem('token');

      // Navigate to the login page with replaceUrl set to true
      this.router.navigate(['login'], { replaceUrl: true });
    });
  }
  getAllCarts() {
    this.serv.getCartProduct().subscribe((res: any) => {
      this.carts = res;
    });
  }

  filterCart() {
    this.carts = [];
    this.serv
      .getCartProduct(this.form.value)
      .subscribe((res: any) => (this.carts = res));
  }

  deleteProduct(id: number) {
    this.serv.deleteCart(id).subscribe((res) => alert('cart deleted sucsses'));
    this.getAllCarts();
  }

  viewProduct(index: number) {
    this.allProducts = [];
    this.details = this.carts[index].products;
    // console.log(this.details);
    this.details.map((item) => {
      this.productServ.getProductById(item.productId).subscribe((res) => {
        this.allProducts.push({ item: res, quantity: item.quantity });
      });
    });
    console.log(this.allProducts);
  }
}
