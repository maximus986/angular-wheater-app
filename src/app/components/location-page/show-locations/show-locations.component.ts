import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-show-locations',
  templateUrl: './show-locations.component.html',
  styleUrls: ['./show-locations.component.scss']
})
export class ShowLocationsComponent implements OnInit {
  @Input() locations: Location[];
  constructor() {}

  ngOnInit() {}
}
