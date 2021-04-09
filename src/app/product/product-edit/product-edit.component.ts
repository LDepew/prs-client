import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null;
  vendors: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private productsvc: ProductService,
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("Before Change", this.product);
    this.productsvc.change(this.product).subscribe(
      res => {
        console.log("Edit Successful!")
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit():void {
    this.sys.validateLogin(this.sys.loggedInUser);
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

  compFn(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

}
