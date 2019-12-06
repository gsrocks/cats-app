import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cat } from './cat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats = [
      	{ id: 11, name: 'Barsik', age: 5, country: 'Uganda', city: 'Kampala' },
  		{ id: 12, name: 'Johny', age: 2, country: 'Uganda', city: 'Kampala' },
  		{ id: 13, name: 'Lisa', age: 8, country: 'Uganda', city: 'Kampala' },
    ];
    return {cats};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the cats array is empty,
  // the method below returns the initial number (11).
  // if the cats array is not empty, the method below returns the highest
  // hero id + 1.
  genId(cats: Cat[]): number {
    return cats.length > 0 ? Math.max(...cats.map(cat => cat.id)) + 1 : 11;
  }
}