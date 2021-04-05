import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor();

  save(): void {
    console.log("Before create:", this.vendor);
    this.vndrsvc.create(this.vendor).subscribe(
      res => {
        console.log("Create Successful");
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    private vndrsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
