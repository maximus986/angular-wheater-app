import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
  { path: 'locations', component: LocationPageComponent },
  { path: 'locations/weather', component: WeatherPageComponent },
  { path: 'locations/weather/:id', component: WeatherPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
