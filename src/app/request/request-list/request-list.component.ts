import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';
import { Request} from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  user: User[] = [];
  searchCriteria: string = "";

  constructor(
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.requestsvc.list().subscribe(
      res => {
        console.log("Request:", res)
        this.requests = res as Request[];
      },
      err => { console.error(err); }
    );
  }

}
