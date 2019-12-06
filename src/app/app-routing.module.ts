import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { CatDetailComponent }   from './cat-detail/cat-detail.component';
import { MapComponent } from './map/map.component'
import { AddNewCatComponent } from './add-new-cat/add-new-cat.component'

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  { path: 'cats', component: CatsComponent },
  { path: 'detail/:id', component: CatDetailComponent },
  { path: 'mapp', component: MapComponent},
  { path: 'add-new-cat', component: AddNewCatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }