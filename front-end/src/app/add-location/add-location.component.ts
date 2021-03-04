import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationInfoService } from '../location-info.service';
import { Router } from '@angular/router';
var alertify = require('alertifyjs');

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  //newLocation: Location;


  public location = {
    name: '',
    address: '',
    lat: '',
    lng: '',
    vaccine: false,
    rapidTest: false,
    test: false
  };

  constructor( private locationInfoService: LocationInfoService,
              private router: Router) { }

  ngOnInit() {
  }



  public postLocation(): void {
    
    console.log("location component postLocation", this);
    this.locationInfoService.postLocation(this.location);
    alertify.success("Added Location");
    this._resetForm();
  }

  public backToLocationList(): void {
    this.router.navigateByUrl('admin/location');
  }

  private _resetForm(): void {
    this.location.name='';
    this.location.address='';
    this.location.lat='';
    this.location.lng='';
    this.location.vaccine=false;
    this.location.rapidTest=false;
    this.location.test=false;
  }


}
