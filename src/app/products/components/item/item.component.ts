import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() recivedProduct!:Product;
  @Output() addToCart = new EventEmitter<object>();
  varadd:boolean = false;
  numberOfItems:number = 0;

  addToCartFunc() {
    this.addToCart.emit({item:this.recivedProduct, quantity:this.numberOfItems});
    this.varadd = false;
  }

  add() {
    this.varadd = true;
  }

  generateStarRating(rating:string):string {
    const numberOfStars = Math.round(parseFloat(rating)); // Round the rating to the nearest whole number
    const fullStars = '★'.repeat(numberOfStars); // Full stars
    const emptyStars = '☆'.repeat(5 - numberOfStars); // Empty stars
    return `${fullStars}${emptyStars}`; // Concatenate full and empty stars
  }

}
