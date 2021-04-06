import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request = null;
  id: number = 0;
  showVerify: boolean = false;


  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  edit(): void {
    this.router.navigateByUrl(`/requests/edit/${this.id}`);
  }

  delete(): void {
    this.requestsvc.remove(this.request).subscribe(
      res => {
        console.log("Delete was successful!");
        this.router.navigateByUrl("requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.requestsvc.get(+this.id).subscribe(
      res => {
        console.log("Product:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
