import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any[] = [];
  total: number = 0;
  ngOnInit(): void {
    this.getProduct();
    this.getTotalPrice();
  }
  constructor(private serv: CartServicesService) {}

  getProduct() {
    if ('cart' in localStorage) {
      this.products = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  getTotalPrice() {
    this.total = 0;
    for (let x in this.products) {
      this.total += this.products[x].data.price * this.products[x].quantity;
    }
    console.log(this.total);
  }
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.getTotalPrice();
  }
  addOne(index: number) {
    this.products[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.getTotalPrice();
  }
  minsOne(index: number) {
    this.products[index].quantity--;
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.getTotalPrice();
  }
  deleteElement(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }
  clearCart() {
    localStorage.clear();
    this.products = [];
  }
  addCart() {
    let data = this.products.map((pro) => {
      pro.data.id, pro.quantity;
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: data,
    };
    this.serv.sendCart(model).subscribe(() => {});
    console.log(model);
  }
}
