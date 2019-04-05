import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import {Weather} from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Location[];
  private weathers: Weather;
  constructor(private http: HttpClient) {}

  getLocations(city): Observable<Location[]> {
    return this.http.get<Location[]>(`/api/location/search/?query=${city}`);
  }
  getWeather(woeid): Observable<Weather[]> {
    console.log('WEATHER SERVICE');
    return this.http.get<Weather[]>(`/api/location/${woeid}`);
  }
}
