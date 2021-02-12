import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationInfoService } from '../location-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import * as L from 'leaflet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  newLocation: Location;

  constructor(private locationInfoService: LocationInfoService,
    private route: ActivatedRoute) { }




  ngOnInit(): void {

    function addToMap(lng, lat) {
      var mymap = L.map('mapid').setView([lat, lng], 13);
      L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaHVmZnN0ZXIiLCJhIjoiY2toZTZzeTd4MG03czMwbzIwN2xiNHgwaSJ9.4PrmZNzpL6Q1rZ49bCD9lA'
      }).addTo(mymap);
      var marker = L.marker([lat, lng]).addTo(mymap);
    }

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('locationid');
          console.log('ID', id);
          return this.locationInfoService.getLocationById(id);
        })
      )
      .subscribe((newLocation: Location) => {
        this.newLocation = newLocation;
        console.log("LOCATION", newLocation.coords.coordinates[0]);
        addToMap(newLocation.coords.coordinates[0], newLocation.coords.coordinates[1]);

      });

  }

}
