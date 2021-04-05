import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();

  save(): void {
    console.log("Before create:", this.user);
    this.usrsvc.create(this.user).subscribe(
      res => {
        console.log("Create Successful");
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    private usrsvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
