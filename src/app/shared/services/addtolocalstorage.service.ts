import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddtolocalstorageService {
  cartOfProduct: any[] = [];
  constructor() {}
  // =================start add to local storage  ==================================
  addToLocalStorage(event: any) {
    if ('cart' in localStorage) {
      let initalArray = [];
      initalArray = JSON.parse(localStorage.getItem('cart')!);
      this.cartOfProduct = initalArray;
      // Check if this.cartOfProduct is an array or not
      if (!Array.isArray(this.cartOfProduct)) {
        this.cartOfProduct = [];
      }
      // check if the element is alredy exisit in the localstorage
      let item = this.cartOfProduct.find(
        (res) => res.data.id === event.data.id
      );
      if (item) {
        alert('This Product Is Alredy Exist In The Cart');
      } else {
        this.cartOfProduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartOfProduct));
      }
    } else {
      this.cartOfProduct = [];
      this.cartOfProduct.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartOfProduct));
    }
  }
  // =================End add to local storage  ==================================
}
