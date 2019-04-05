import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-show-locations',
  templateUrl: './show-locations.component.html',
  styleUrls: ['./show-locations.component.scss']
})
export class ShowLocationsComponent implements OnInit {
  city;
  @Input() locations: Location[];
  @Output() filteredCity = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick(woeid) {
    for (let location of this.locations) {
      if (location.woeid == woeid) {
        this.city = location;
      }
      this.filteredCity.emit(this.city);
    }
  }
}
