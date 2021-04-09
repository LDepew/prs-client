import { Product } from "src/app/product/product.class"
import { Request } from "../request.class"

export class LineItem {
    id: number = 0;
    request: Request;
    product: Product;
    quantity: number = 0;
    
  }