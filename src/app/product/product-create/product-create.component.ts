import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  vendor: Vendor;

  
  constructor(
    private sys: SystemService,
    private productsvc: ProductService,
    private vndrsvc: VendorService,
    private router: Router
    ) { }
    
    ngOnInit():void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.vndrsvc.list().subscribe(
      res => {
        console.log("Vendor list:", res);
        this.vendors = res as Vendor[];
      },
      err => {
        console.error(err);
      }
    );
    }

      
      save(): void {
        this.product.vendorid = +this.product.vendorid
        console.log("Before create:", this.product);
        this.productsvc.create(this.product).subscribe(
          res => {
            console.log("Create Successful", res);
            this.product = res;
            this.router.navigateByUrl('/products/list');
          },
          err => {
            console.error(err);
          }
        );
      }
      

    }
    