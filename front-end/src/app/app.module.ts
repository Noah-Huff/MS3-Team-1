import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
