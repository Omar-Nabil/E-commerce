import { Product } from "src/app/products/interfaces/product";

export interface Cartdetails {
  discountedTotal:number,
  id:number,
  products:Product[],
  total:number,
  totalProducts:number,
  totalQuantity:number,
  userId:number,
  quantity:number
}
