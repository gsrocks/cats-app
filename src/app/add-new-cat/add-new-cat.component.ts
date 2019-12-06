import { Component, OnInit } from '@angular/core';
import { CatService }  from '../cat.service';
import { Cat } from '../cat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-cat',
  templateUrl: './add-new-cat.component.html',
  styleUrls: ['./add-new-cat.component.css']
})
export class AddNewCatComponent implements OnInit {
	cats: Cat[];
	cat: Cat;

  constructor(
  	    private route: ActivatedRoute,
   		private catService: CatService,
    	private location: Location
  	) { }

  ngOnInit() {
  }

	add(name: string, age: number, country: string, city: string): void {
		name = name.trim();
		if (!name) { return; }
		this.catService.addCat({ name, age, country, city } as Cat)
	    .subscribe(cat => {
		    this.cats.push(cat);
	    });
	  }
	goBack(): void {
	    this.location.back();
	  }

}
