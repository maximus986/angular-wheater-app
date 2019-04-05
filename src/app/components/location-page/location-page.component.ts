import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/Location.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {
  locations: Location[];
  constructor(private locationService: LocationService) {}

  ngOnInit() {}
  onLocationSearch(locations) {
    this.locations = locations;
    console.log(this.locations);
  }
}
