import { Component } from '@angular/core';
import { GetproductService } from 'src/app/services/getproduct.service';
import { AddtolocalstorageService } from 'src/app/shared/services/addtolocalstorage.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css'],
})
export class AllproductComponent {
  allProducts: any = [];
  catagories: any = [];
  cartOfProduct: any[] = [];
  loaded: boolean = false;

  constructor(
    private getProductserv: GetproductService,
    private addServ: AddtolocalstorageService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCatagoriesName();
  }

  getAllProducts() {
    this.loaded = true;
    this.getProductserv.getAllProducts().subscribe(
      (res) => {
        this.allProducts = res;
        this.loaded = false;
      },
      (error) => {
        alert(`${error.message}`);
        this.loaded = false;
      }
    );
  }

  filterProducts(event: any) {
    let value = event.target.value;
    console.log(value);
    if (value == 'All') {
      this.getAllProducts();
    } else {
      this.spicficCatagory(value);
    }
  }

  getCatagoriesName() {
    this.getProductserv.getCatagoriesName().subscribe((res) => {
      this.catagories = res;
    });
  }

  spicficCatagory(value: string) {
    this.loaded = true;
    this.getProductserv.getSpicfiCatgory(value).subscribe(
      (res) => {
        this.allProducts = res;
        this.loaded = false;
      },
      (error) => {
        alert(`${error.message}`);
      }
    );
  }
  // =================start add to local storage function ==================================
  addLocalStorage(event: any) {
    this.addServ.addToLocalStorage(event);
  }
  // =================End add to local storage function ==================================
}
