import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-locations',
  templateUrl: './search-locations.component.html',
  styleUrls: ['./search-locations.component.scss']
})
export class SearchLocationsComponent implements OnInit {
  locations: Location[];
  city: string = 'lon';

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocations().subscribe(locations => {
      this.locations = locations;
    });
  }
}
