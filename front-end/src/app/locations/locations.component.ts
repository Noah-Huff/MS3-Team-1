import { Component, OnInit } from '@angular/core';
import { LocationInfoService } from '../location-info.service';
import { Location } from '../location';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
