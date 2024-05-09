import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.ts';

@Injectable({
  providedIn: 'root',
})
export class GetproductService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }

  getLimitProducts() {
    return this.http.get(environment.baseApi + 'products?limit=5');
  }

  getCatagoriesName() {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getSpicfiCatgory(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword);
  }
  getProductById(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }
}
