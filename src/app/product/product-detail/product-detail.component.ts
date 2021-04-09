import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = null;
  id: number = 0;
  showVerify: boolean = false;


  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  edit(): void {
    this.router.navigateByUrl(`/products/edit/${this.id}`);
  }

  delete(): void {
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.log("Delete was successful!");
        this.router.navigateByUrl("products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.id = this.route.snapshot.params.id;
    this.productsvc.get(+this.id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
