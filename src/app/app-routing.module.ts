import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

const routes: Routes = [

  { path: 'movies-list', component: MoviesListComponent },
  { path: 'watchlist-page', component: WatchlistPageComponent },
  { path: '', redirectTo: '/movies-list', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


