import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  id: number;
  weather: Weather[];
  tempInfos;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getWeather();
  }

  getWeather() {
    return this.weatherService.getWeather(this.id).subscribe(weather => {
      this.weather = weather;
      const props = Object.keys(this.weather);
      this.tempInfos = this.weather.consolidated_weather;
      console.log(this.tempInfos);
    });
  }
}
