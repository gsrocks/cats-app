import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { AddNewCatComponent } from './add-new-cat/add-new-cat.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailComponent,
    MapComponent,
    AddNewCatComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }),
  NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZ2VvcmdpeXN0cmlndW4iLCJhIjoiY2sza2lod2M3MDNmMTNubjRmeHlzMGVncCJ9.yA5LPO-fo10Aim9lPZGvEA',
      geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
