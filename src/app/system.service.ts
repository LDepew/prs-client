import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;
  admin: boolean = false;
  reviewer: boolean = false;

  constructor(
    private router: Router
  ) { }


validateLogin(loggedInUser: User): void {
  if(this.loggedInUser == null) {
    this.router.navigateByUrl('/login');
    console.warn("Check for login disabled!");
  }
}



validateCredentials(loggedInUser: User){
  if(this.loggedInUser.reviewer == true){
    this.reviewer = true;
  }
  if(this.loggedInUser.admin == true){
    this.admin = true;
  }
}
}