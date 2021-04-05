import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = null;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("Before Change", this.user);
    this.usrsvc.change(this.user).subscribe(
      res => {
        console.log("Edit Successful!")
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);
      }
    );
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usrsvc.get(+id).subscribe(
      res => {
        console.log("User: ", res)
        this.user = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
