import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/request/request-lines/request-lines.class';
import { RequestLinesService } from 'src/app/request/request-lines/request-lines.service';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request.class'

@Component({
  selector: 'app-review-approve',
  templateUrl: './review-approve.component.html',
  styleUrls: ['./review-approve.component.css']
})
export class ReviewApproveComponent implements OnInit {
  request: Request = new Request;
  lineItems: LineItem[];
  id: number = 0;
  showReasonForRejection: boolean = false;

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private linesvc: RequestLinesService,
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.refresh();
  }

  approve(): void {
    console.log("Before approve:", this.request);
    this.requestsvc.approve(this.request).subscribe(
      res => {
        console.log("Approved:", res);
        this.request = res;
        this.router.navigateByUrl('/reviews/list');
      },
      err => {
        console.error(err);
      }
    );
  }

  reject(): void {
    this.toggleVerify();
  }

  confirm(): void {
    this.requestsvc.reject(this.request).subscribe(
      res => {
        console.log("Rejected:", res);
        this.request = res;
        this.router.navigateByUrl('/reviews/list');
      },
      err => {
        console.error(err);
      }
    );
  }

  refresh() : void {
    this.id = this.route.snapshot.params.id;
    this.requestsvc.get(this.id).subscribe(
      res => {
        console.log("Requests:", res);
        this.request = res;
      },
      err => {
      console.error(err);
      }
    );
    this.linesvc.listByRequestId(this.id).subscribe(
      res => {
        console.log("Requests:", res);
        this.lineItems = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  toggleVerify(): void {
    this.showReasonForRejection = !this.showReasonForRejection;
  }

}
