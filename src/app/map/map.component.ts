import { Component, OnInit} from '@angular/core';
import { environment } from './../../environments/environment.prod';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})
export class MapComponent implements OnInit {
	map: mapboxgl.Map;

  constructor() { }
  ngOnInit() {
    
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapboxKey);

    this.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [35.0557529, 48.458169],
    zoom: 15
    });

    this.createMarker(35.0557529, 48.458169);
    this.createMarker(35.0560031, 48.4573392);
    this.createMarker(35.059185, 48.457175);

  }

  createMarker(lng: number, lat: number){

    const marker = new mapboxgl.Marker({
    draggable: true
    }).setLngLat([lng, lat])
      .addTo(this.map);
    }

}