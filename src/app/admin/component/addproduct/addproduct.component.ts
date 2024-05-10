import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddproductService } from 'src/app/services/addproduct.service';
import { GetproductService } from 'src/app/services/getproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  displayStyle = 'none';
  displayStyle2 = 'none';

  products: any = [];
  addForm!: FormGroup;
  base64: any = '';
  catgory: any = [];
  catagoryType: any;
  productImage: any;
  constructor(
    private serv: AddproductService,
    private fb: FormBuilder,
    private catServ: GetproductService
  ) {}
  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      catgory: ['', Validators.required],
    });
    this.getAllProducts();
    this.getCatagory();
  }
  // start pop
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  openPopup2() {
    this.displayStyle2 = 'block';
  }
  closePopup2() {
    this.displayStyle2 = 'none';
  }
  // End pop
  // ===============get all product
  getAllProducts() {
    return this.serv.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  // ======================add product
  addProduct() {
    let modal = this.addForm.value;

    this.serv.createProduct(modal).subscribe((res) => {
      alert('the product is added');
    });
  }
  //========================= get catagory
  getCatagory() {
    return this.catServ.getCatagoriesName().subscribe((res) => {
      this.catgory = res;
    });
  }
  // ==========================path64 function
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.addForm.get('image')?.setValue(this.base64);
    };
  }
  // ===========================update product

  productDetails(item: any) {
    this.addForm.patchValue({
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      catgory: item.category,
    });
    this.productImage = item.image;
    this.catagoryType = item.category;
  }
  updateProduct() {
    let modal = this.addForm.value;
    this.serv
      .updateProduct(modal)
      .subscribe((res) => alert('the product is updated'));
  }
}
