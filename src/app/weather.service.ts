import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'b61d16e257553fe8018a91c3966a925b';
  uri: string;

  uri2: string;

  constructor(private http: HttpClient) { 
    this.uri = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&lang=sp&q=`
    this.uri2 = `https://countriesnow.space/api/v0.1/countries`
  }

  getWeather(name: string){
    return this.http.get(`${this.uri}${name}`)
  }

  getCities(){
    return this.http.get(`${this.uri2}`)
  }

}