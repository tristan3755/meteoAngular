import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReimsService {

  constructor(private requete:HttpClient) { }


  getInfosReims(){
    let url="https://api.openweathermap.org/data/2.5/weather?q=Reims&appid=28da2799b73f06513b062e2b6178e72d"
    return this.requete.get(url)
  }


}
