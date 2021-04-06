import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = null;
  vendors: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("Before Change", this.request);
    this.requestsvc.change(this.request).subscribe(
      res => {
        console.log("Edit Successful!")
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  


  // ngOnInit(): void {
  //   let id = this.route.snapshot.params.id;
  //   this.productsvc.get(+id).subscribe(
  //     res => {
  //       console.log("Product: ", res)
  //       this.product = res;
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   );
  // }

  ngOnInit():void {
    // this.sys.chkLogin();
    this.vndrsvc.list().subscribe(
      res => { console.debug(res); this.vendors = res; },
      err => {console.error(err);}
    );
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res => {console.debug(res); this.request = res; },
      err=> {console.error(err);}
    )
  }

}
