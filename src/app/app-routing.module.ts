import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'peliculas', component: MusicCardComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'peliculas' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
