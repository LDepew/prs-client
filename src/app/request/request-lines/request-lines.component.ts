import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request} from '../request.class';
import { RequestService } from '../request.service';
import { LineItem } from './request-lines.class';
import { RequestLinesService } from './request-lines.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request: Request = new Request();
  id: number = 0;
  lineItems: LineItem[];
  lineItem: LineItem;

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private sys: SystemService,
    private router: Router,
    private rqlinesvc: RequestLinesService
  ) { }

  ngOnInit(): void {
    // this.sys.validateLogin(this.sys.loggedInUser);
    this.refresh();
  }

  delete(lineItem): void {
    this.rqlinesvc.remove(lineItem).subscribe(
      res => {
        console.log("Line item delete:", res);
        this.refresh();
      },
      err => {
        console.error(err);
      }
    );
  }

  

    refresh(): void {
      this.id = this.route.snapshot.params.id;
      this.requestsvc.get(this.id).subscribe(
        res => {
          console.log(res);
          this.request = res;
        },
        err => {
          console.error(err);
        }
      );
      this.rqlinesvc.listByRequestId(this.id).subscribe(
        res => {
          console.log("Line items for request:" , res);
          this.lineItems = res;
        }
      )
    }

  
    submit(): void {
      this.requestsvc.submitReview(this.request).subscribe(
        res => {
        console.log("Request submitted for review:", res);
        this.request = res;
        this.refresh();
        this.router.navigateByUrl('/requests/list');
      },
      err => {
        console.error(err);
      }
      )
    }
  
  }
  