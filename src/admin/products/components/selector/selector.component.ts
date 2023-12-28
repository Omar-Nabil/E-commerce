import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from 'src/app/products/sevices/products.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  @Output() selectedCat = new EventEmitter<string>();
  @Input() selected = '';

  constructor(private _ProductService:ProductsService) {
    this.getCategories();
  }

  allCategories:string[] = [];

  sendCat(event:any) {
    let cat = event.target.value;

    this.selectedCat.emit(cat);
  }

  getCategories() {
    this._ProductService.getCategories().subscribe({
      next:(res) => {
        this.allCategories = res;

        this.allCategories.splice(6,this.allCategories.length-1);
      }
    })
  }
}
