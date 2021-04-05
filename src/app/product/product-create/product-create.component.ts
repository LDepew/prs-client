import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();

  save(): void {
    console.log("Before create:", this.product);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.log("Create Successful");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
