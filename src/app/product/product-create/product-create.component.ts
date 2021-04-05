import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[] = [];

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
    private sys: SystemService,
    private productsvc: ProductService,
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit():void {
    // this.sys.chkLogin();
    this.vndrsvc.list().subscribe(
      res => { console.debug(res); this.vendors = res; },
      err => {console.error(err);}
    );
    let id = this.route.snapshot.params.id;
    this.productsvc.get(+id).subscribe(
      res => {console.debug(res); this.product = res; },
      err=> {console.error(err);}
    )
  }

}
