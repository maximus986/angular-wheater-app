import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { SearchLocationsComponent } from './components/location-page/search-locations/search-locations.component';
import { ShowLocationsComponent } from './components/location-page/show-locations/show-locations.component';
import { DisplayWeatherComponent } from './components/weather-page/display-weather/display-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPageComponent,
    WeatherPageComponent,
    SearchLocationsComponent,
    ShowLocationsComponent,
    DisplayWeatherComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
