import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = null;

  constructor(
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("Before Change", this.vendor);
    this.vndrsvc.change(this.vendor).subscribe(
      res => {
        console.log("Edit Successful!")
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.error(err);
      }
    );
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vndrsvc.get(+id).subscribe(
      res => {
        console.log("User: ", res)
        this.vendor = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
