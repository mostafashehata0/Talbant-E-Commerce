import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ParamMap,
} from '@angular/router';
import { GetproductService } from '../services/getproduct.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: any;
  product: any = {};
  loaded: boolean = false;
  constructor(private route: ActivatedRoute, private serv: GetproductService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');

      console.log(this.id, `the id`);
    });
    this.getSpsificProduct();
  }
  getSpsificProduct() {
    this.loaded = true;
    this.serv.getProductById(this.id).subscribe(
      (res) => {
        this.product = res;
        this.loaded = false;
      },
      (error) => {
        alert('error');
        this.loaded = true;
      }
    );
  }
}
