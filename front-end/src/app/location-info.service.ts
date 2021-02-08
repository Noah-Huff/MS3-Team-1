import { Injectable } from '@angular/core';
import { Location } from './location';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LocationInfoService {

  constructor(
    private http: HttpClient,
  ) { }
  
  private apiBaseURL = environment.apiBaseURL;

  public locationsByDistance(lat: number, lng: number): Promise<Location[]> {
    const maxDistance: number = 40000;
    const url: string = `${this.apiBaseURL}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;

    return this.http.get(url).toPromise().then(response => response as Location[]).catch(this._handleError);

  }

  private _handleError(error: any): Promise<any> {
    console.error("Something has gone wrong.");
    return Promise.reject(error.message || error);
  }
}
