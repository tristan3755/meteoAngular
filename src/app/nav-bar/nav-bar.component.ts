import { Component, OnInit } from '@angular/core';
import { navBar } from '../schemaNav';
import { navService } from '../nav.service';
import {NancyService} from '../nancy.service';
import {StrasbourgService} from '../strasbourg.service';
import {MetzService} from '../metz.service';
import {ReimsService} from '../reims.service';
import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  villesNav: navBar[];
 
 infosNancy:any=[];
 infosStras:any=[];
 infosMetz:any=[];
 infosReims:any=[];

 nancyButton=false
 strasbourgButton=false
 metzButton=false
 reimsButton=false

  constructor(private serviceNav: navService, private nancy:NancyService, private strasbourg:StrasbourgService,private metz:MetzService,private reims:ReimsService){
    this.villesNav = [];

     this.nancy.getInfoNancy().subscribe(data=>{
      console.log(data)
this.infosNancy=data
    })

    this.strasbourg.getInfoStras().subscribe(dataStras=>{
      console.log(dataStras)
this.infosStras=dataStras
    })

    this.metz.getInfosMetz().subscribe(dataMetz=>{
      console.log(dataMetz)
      this.infosMetz=dataMetz
    })

    this.reims.getInfosReims().subscribe(dataReims=>{
      console.log(dataReims)
      this.infosReims=dataReims
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
    this.strasbourgButton=false
    this.metzButton=false
    this.reimsButton=false
  }
  strasbourgOn(){
    this.nancyButton=false
    this.metzButton=false
    this.reimsButton=false
    this.strasbourgButton=true
  }
 metzOn(){
    this.nancyButton=false
    this.strasbourgButton=false
    this.reimsButton=false
    this.metzButton=true
   
  }
  reimsOn(){
    this.nancyButton=false
    this.strasbourgButton=false
    this.metzButton=false
    this.reimsButton=true
   
  }
}
