import { Component, OnInit } from '@angular/core';
import { navBar } from '../schemaNav';
import { navService } from '../nav.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  villesNav: navBar[];

  constructor(private serviceNav: navService) {
    this.villesNav = [];
  }

  ngOnInit(): void {
    this.villesNav = this.serviceNav.retourServiceNav();
  }

  getNav() {
    return this.villesNav;
  }
}
