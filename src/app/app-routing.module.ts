import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StarwarcharactersComponent} from './starwarcharacters/starwarcharacters.component';
import {CharacterdetailsComponent} from './starwarcharacters/characterdetails/characterdetails.component';

const routes: Routes = [
  { path: 'characters',  component: StarwarcharactersComponent },
  { path: 'characters/details/:characterId',  component: CharacterdetailsComponent },
  { path: '**', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
