import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-search-locations',
  templateUrl: './search-locations.component.html',
  styleUrls: ['./search-locations.component.scss']
})
export class SearchLocationsComponent implements OnInit {
  title;
  locations: Location[];
  @Output() searchedLocations = new EventEmitter();

  constructor(private locationService: LocationService) {}

  ngOnInit() {}

  searchLocation() {
    return this.locationService.getLocations(this.title).subscribe(locations => {
      this.locations = locations;
      this.searchedLocations.emit(this.locations);
      this.title = '';
    });
  }
}
