import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request.class';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  requests: Request[];
  processedRequests: Request[];


  constructor(
    private sys: SystemService,
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.requestsvc.list().subscribe(
      res => {
        console.log("Requests", res);
        this.requests = res;
      },
      err => {
        console.error(err);
      }
    );
    this.requestsvc.getReview(this.sys.loggedInUser.id).subscribe(
      res => {
        console.log("Processed Requests:", res);
        this.processedRequests = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
