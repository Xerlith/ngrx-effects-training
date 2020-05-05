import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipComparatorComponent } from './components/starship-comparator/starship-comparator.component';
import { PersonComparatorComponent } from './components/person-comparator/person-comparator.component';


const routes: Routes = [
  {
    path: 'starships', 
    component: StarshipComparatorComponent
  },
  {
    path: 'people', 
    component: PersonComparatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
