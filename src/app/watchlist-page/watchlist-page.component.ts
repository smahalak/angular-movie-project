import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {


  watchList: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getAndSetWatchList();
  }


  getAndSetWatchList = (): void => {
    this.watchList = this.moviesService.getWatchList();
  }


  onWatch = (movie: any): void => {
    this.moviesService.toggleWatchList(movie);
    this.getAndSetWatchList();
  }

}
