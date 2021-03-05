import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { LocationsComponent } from './locations/locations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { DetailsComponent } from './details/details.component';
import { FrameworkComponent } from './framework/framework.component';
import { DistancePipe } from './distance.pipe';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLocationListComponent } from './admin-location-list/admin-location-list.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LocationsComponent,
    NavbarComponent,
    BannerComponent,
    DetailsComponent,
    FrameworkComponent,
    DistancePipe,
    AdminLoginComponent,
    AdminLocationListComponent,
    AddLocationComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
