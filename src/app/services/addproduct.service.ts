import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.ts';

@Injectable({
  providedIn: 'root',
})
export class AddproductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(environment.baseApi + 'products');
  }
}