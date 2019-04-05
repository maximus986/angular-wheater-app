import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Location[];

  constructor(private http: HttpClient) {}

  getLocations(city): Observable<Location[]> {
    return this.http.get<Location[]>(`/api/location/search/?query=${city}`);
  }

  
}
