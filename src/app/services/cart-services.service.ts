import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.ts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServicesService {
  constructor(private http: HttpClient) {}
  sendCart(model: any): Observable<any> {
    return this.http.post(environment.baseApi + 'carts', model);
  }

  getCartProduct(params?: any) {
    let param = new HttpParams();
    param = param
      .append('params.startdate', params?.start)
      .append('params.enddate', params?.end);
    return this.http.get('https://fakestoreapi.com/carts', { params: param });
  }

  deleteCart(id: number) {
    return this.http.delete('https://fakestoreapi.com/carts/' + id);
  }
}
