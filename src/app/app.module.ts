import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { SearchLocationsComponent } from './components/search-locations/search-locations.component';
import { ShowLocationsComponent } from './components/show-locations/show-locations.component';

@NgModule({
  declarations: [AppComponent, LocationPageComponent, WeatherPageComponent, SearchLocationsComponent, ShowLocationsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
