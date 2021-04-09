import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { RequestLinesService } from '../request-lines.service'
import { LineItem } from '../request-lines.class'

@Component({
  selector: 'app-request-lines-edit',
  templateUrl: './request-lines-edit.component.html',
  styleUrls: ['./request-lines-edit.component.css']
})
export class RequestLinesEditComponent implements OnInit {
  lineItem: LineItem;
  id: number = 0;
  products: Product[];
  requestId: number = 0;

  constructor(
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private linesvc: RequestLinesService,
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.productsvc.list().subscribe(
      res => {
        console.log("Products", res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
    this.linesvc.get(this.id).subscribe(
      res => {
        console.log("Line Item", res);
        this.lineItem = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  save(): void {
    this.linesvc.change(this.lineItem).subscribe(
      res => {
        console.log("New Line Item:", res);
        this.lineItem = res;
        this.requestId = this.lineItem.request.id;
        this.router.navigateByUrl(`/requests/lines/${this.requestId}`);
      }
    );
  }

  compFn(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

}
