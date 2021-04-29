import { Component, OnInit } from '@angular/core';
import { navBar } from '../schemaNav';
import { navService } from '../nav.service';
import {NancyService} from '../nancy.service';
import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  villesNav: navBar[];
 infosNancy:any=[];
 nancyButton=false
iconMeteo="infosNancy.weather[0].icon"

  constructor(private serviceNav: navService, private nancy:NancyService) {
    this.villesNav = [];

     this.nancy.getInfoNancy().subscribe(data=>{
      console.log(data)
this.infosNancy=data
    })
  }
 
  ngOnInit(): void {
    this.villesNav = this.serviceNav.retourServiceNav();
    
  }

  getNav() {
    return this.villesNav;
  }

  nancyOn(){
    this.nancyButton=true
   console.log(this.nancyButton)
  }
}
