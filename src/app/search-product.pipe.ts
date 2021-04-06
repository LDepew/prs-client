import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string): Product[] {
    let selectedProducts: Product[] = [];
    if(searchCriteria.length == 0) {
      return products;
    }
    for(let product of products) {
      if(
        product.id.toString().includes(searchCriteria.toLocaleLowerCase())
        || product.vendor.name.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || product.partNumber.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || product.name.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || product.price.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || product.unit.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        ) {
        selectedProducts.push(product);
      }
    }
    return selectedProducts;
  }

}
