import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../../request.service';
import { LineItem } from '../request-lines.class';
import { RequestLinesService } from '../request-lines.service';

@Component({
  selector: 'app-request-lines-create',
  templateUrl: './request-lines-create.component.html',
  styleUrls: ['./request-lines-create.component.css']
})
export class RequestLinesCreateComponent implements OnInit {
  reqId: number = 0;
  products: Product[];
  request: Request;
  lineItem: LineItem = new LineItem;

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private linesvc: RequestLinesService,
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    // this.sys.validateLogin(this.sys.loggedInUser);
    this.reqId = this.route.snapshot.params.reqId;
        console.log(this.reqId);
        this.requestsvc.get(this.reqId).subscribe(
          res => {
            console.log("Request by Id: ", res);
            this.lineItem.request = res;
          },
          err => {
            console.error(err);
          }
        );
        this.productsvc.list().subscribe(
          res => {
            console.log("Products:", res);
            this.products = res;
          },
          err => {
            console.error(err);
          }
        );
  }

  save(): void {
    this.linesvc.create(this.lineItem).subscribe(
      res => {
        console.log("Create Line Item:", res);
        this.lineItem = res;
        this.router.navigateByUrl(`/requests/lines/${this.reqId}`);
      },
      err => {
        console.error(err);
      }
    );
  }
  
  compFn(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
  

}
