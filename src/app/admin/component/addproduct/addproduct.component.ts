import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddproductService } from 'src/app/services/addproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  displayStyle = 'none';
  products: any = [];
  addForm!: FormGroup;
  base64: any = '';
  constructor(private serv: AddproductService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      catgory: ['', Validators.required],
    });
    this.getAllProducts();
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  getAllProducts() {
    return this.serv.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }
  addProduct() {
    console.log(this.addForm.value);
  }
  // path64 function
  getImagePath(event: any) {
    const file = event.target.file[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      console.log(this.base64);
    };
  }
}
