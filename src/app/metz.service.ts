import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MetzService {

  constructor(private requeteMetz:HttpClient) { 

  }

  getInfosMetz(){
    let urlMetz="https://api.openweathermap.org/data/2.5/weather?q=Metz&appid=28da2799b73f06513b062e2b6178e72d";
    return this.requeteMetz.get(urlMetz)
  }
}
