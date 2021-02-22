import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movieData: any;
  // needs a place to return the returned gifs

  // movies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopular();
  }


  getPopular = (): void => {
    this.moviesService.getPopularMovies().subscribe((response: any) => {
      console.log(response)
      this.movieData = response
    })
  }

}
