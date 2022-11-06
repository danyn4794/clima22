import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  nameCity: string;
  nameCountry: string;
  numberCountry : string;
  name2: string;
  country: string;
  temp: string;
  maxTemp: string;
  minTemp: string;
  weatherP: string;
  wind: string;

  cityList : string;
  countryList : string;
  changeCity(e){
    this.nameCity = e.target.value;
    console.log(e.target.value)
  }
  changeCountry(f){
    this.nameCountry = f.target.value;
    console.log(f.target.value)
  }
  

  constructor(private WeatherService : WeatherService) { }

  ngOnInit(): void {

    this.WeatherService.getCities().subscribe((data2: any) => {
      this.cityList = data2.data[56].cities;
    })
    this.WeatherService.getCities().subscribe((data2: any) => {
      let country = data2.data.map (element =>{
        return element.country;
      })
      this.countryList = country;
    })
    
  }

    search(){
      this.WeatherService.getWeather(this.nameCity).subscribe((data: any) => {
        this.name2 = data.name;
        this.country = data.sys.country;
        this.temp = data.main.temp;
        this.maxTemp = data.main.temp_max;
        this.minTemp = data.main.temp_min;
        this.weatherP = data.weather[0].description;
        this.wind = data.wind.speed;
        console.log(data);
      })
    }
}
