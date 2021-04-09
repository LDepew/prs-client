import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchCriteria: string = "";

  constructor(
    private productsvc: ProductService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.productsvc.list().subscribe(
      res => {
        console.log("Products:", res)
        this.products = res as Product[];
      },
      err => { console.error(err); }
    );
  }

}
