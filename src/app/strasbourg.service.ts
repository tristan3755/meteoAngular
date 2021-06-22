import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StrasbourgService {

  constructor(private requete:HttpClient) { }

  getInfoStras(){
    let urlStras="https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&appid=28da2799b73f06513b062e2b6178e72d&units=metric";
    return this.requete.get(urlStras)
  }

}
