import { Injectable } from '@angular/core';
import { Location } from './location';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LocationInfoService {

  constructor(private http: HttpClient) { }
  
  private apiBaseURL = environment.apiBaseURL;
  
  public locationsByDistance(lat: number, lng: number): Promise<Location[]> {
    const maxDistance: number = 40000;
    const url: string = `${this.apiBaseURL}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    console.log('LOCATIONS BY DISTANCE');
    return this.http.get(url).toPromise().then(response => response as Location[]).catch(this._handleError);

  }

  public getLocationById(locationId: string): Promise<Location> {
    const url: string = `${this.apiBaseURL}/location/${locationId}`;
    console.log('ENTERED DATA SERVICE')
    return this.http
    .get(url)
    .toPromise()
    .then(response => response as Location)
    .catch(this._handleError);
  }

  private _handleError(error: any): Promise<any> {
    console.error("Something has gone wrong.", error);
    return Promise.reject(error.message || error);
  }
  
}
