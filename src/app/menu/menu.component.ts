import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string;

  menus: any[] = [
    { display: 'Home', route: '/home' },
    { display: 'Users', route: '/users/list' },
    { display: 'Vendors', route: '/vendors/list'},
    { display: 'Products', route: '/products/list'},
    { display: 'Requests', route: '/requests/list'},
    { display: 'Reviews', route: '/reviews/list'},
    { display: 'About', route: '/about' },
    { display: 'Login', route: '/login' }
  ]

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.username = this.sys.loggedInUser.firstName;
  }

}
