import { Component, OnInit } from '@angular/core';
import { GetproductService } from 'src/app/services/getproduct.service';
import { AddtolocalstorageService } from '../../services/addtolocalstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  someOfProducts: any = [];
  loaded: boolean = false;

  constructor(
    private getproduct: GetproductService,
    private addServ: AddtolocalstorageService
  ) {}
  ngOnInit(): void {
    this.getsomeOfProducts();
  }

  getsomeOfProducts() {
    this.loaded = true;
    this.getproduct.getLimitProducts().subscribe(
      (res) => {
        this.someOfProducts = res;
        this.loaded = false;
      },
      (error) => {
        alert(`${error.message}`);
        this.loaded = false;
      }
    );
  }

  // =================start add to local storage function ==================================
  addLocalStorage(event: any) {
    this.addServ.addToLocalStorage(event);
  }
  // =================End add to local storage function =================================
}
