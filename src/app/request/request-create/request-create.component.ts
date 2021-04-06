import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  vendors: Vendor[] = [];

  save(): void {
    console.log("Before create:", this.request);
    this.requestsvc.create(this.request).subscribe(
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
    private requestsvc: RequestService,
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
    this.requestsvc.get(+id).subscribe(
      res => {console.debug(res); this.request = res; },
      err=> {console.error(err);}
    )
  }

}
