import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NancyService {

  constructor(private requete:HttpClient) {}

  getInfoNancy(){
    let urlNancy="https://api.openweathermap.org/data/2.5/weather?q=Nancy&appid=28da2799b73f06513b062e2b6178e72d";
    return this.requete.get(urlNancy)
  }
  
}
