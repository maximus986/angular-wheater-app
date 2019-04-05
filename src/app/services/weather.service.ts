import { Injectable } from '@angular/core';
import { Weather } from '../models/weather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: Weather;

  constructor(private http: HttpClient) {}

  getWeather(id): Observable<Weather[]> {
    return this.http.get<Weather[]>(`/api/location/${id}/`);
  }
}
