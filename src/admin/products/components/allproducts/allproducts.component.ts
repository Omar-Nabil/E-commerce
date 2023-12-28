import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/products/interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent {
  addForm!:FormGroup;
  update:boolean = false;
  temp:any;

  constructor(private _ProductService:ProductService, private _FormBuilder:FormBuilder) {
    this.getProducts();
    this.addForm = this._FormBuilder.group({
      title:['',[Validators.required, Validators.minLength(4)]],
      price:[0,[Validators.required, Validators.min(10)]],
      cat:['',[Validators.required]],
      image:['',[Validators.required]],
      desc:['',[Validators.required, Validators.minLength(14)]]
    })
  }

  base64:any = '';

  products:Product[] = [];
  total:number = 0;

  add() {
     this.update = false;
     this.addForm.controls['title'].setValue('');
        this.addForm.controls['price'].setValue(0);
        this.addForm.controls['desc'].setValue('');
        this.addForm.controls['cat'].setValue('all');
        this.addForm.controls['image'].setValue('');
        this.base64 = ''
  }

  get title() {
    return this.addForm.get('title');
  }
  get price() {
    return this.addForm.get('price');
  }
  get cat() {
    return this.addForm.get('cat');
  }

  get image() {
    return this.addForm.get('image');
  }
  get desc() {
    return this.addForm.get('desc');
  }


  getProducts() {
    this._ProductService.getAllProducts().subscribe({
      next:(res) => {
        this.products = res.products;
        this.products.splice(10, this.products.length - 1);
      }
    })
  }

  getSelectedCat(cat:string) {
    if(cat === 'all') {
      this.addForm.controls['cat'].setValue(null);
    } else {
      this.addForm.controls['cat'].setValue(cat);
    }
    console.log(this.addForm.get('cat')?.value);
  }

  addProduct() {
    const data = {
      title: this.title?.value
    }
    this._ProductService.addProduct(data).subscribe({
      next:(res) => {
        console.log(res);
        alert('add product success')
      }
    })
  }
  doUpdateProduct() {
    const data = {
      title: this.title?.value
    }
    this._ProductService.updateProduct(data, this.temp).subscribe({
      next:(res) => {
        console.log(res);
        alert('Update product success')
      }
    })
  }

  toBase64(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.addForm.controls['image'].setValue( this.base64);
    };
  }

  showProduct(index:number) {
    this.update = true;
    const data = {
      title: this.products[index].title
    }
    this._ProductService.getProductDetails(index).subscribe({
      next:(res:Product) => {
        this.addForm.controls['title'].setValue(res.title);
        this.addForm.controls['price'].setValue(res.price);
        this.addForm.controls['desc'].setValue(res.description);
        this.addForm.controls['cat'].setValue(res.category);
        this.addForm.controls['image'].setValue(res.thumbnail);
        this.base64 = res.thumbnail;
        this.temp = res.id;
      }
    })
  }
}
