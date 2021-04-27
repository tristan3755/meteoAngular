import { Injectable } from '@angular/core';
import {villesNav} from './tableauNav';
import {navBar} from './schemaNav'

@Injectable({
  providedIn: 'root'
})
export class navService {

  constructor() { }

  retourServiceNav(){
    return villesNav;
  }

}
