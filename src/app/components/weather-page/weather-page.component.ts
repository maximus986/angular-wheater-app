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
  weather;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  getWeather() {
    return this.weatherService.getWeather(44418).subscribe(weather => {
      this.weather = weather;
      console.log(this.id);
      console.log(this.weather);
    });
  }
}
