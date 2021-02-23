import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../movies.service'
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movieData: any
  watchList: any = []
  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.getPopular()
    this.getAndSetWatchList();
  }
  getPopular = (): void => {
    this.moviesService.getPopularMovies().subscribe((response: any) => {
      console.log(response)
      this.movieData = response
    })
  }
  onSubmit = (searchTerm: string): void => {
    this.moviesService.searchTitle(searchTerm).subscribe((response: any) => {
      console.log(response)
      this.movieData = response
    })
  }
  onGenreSearch = (genre: string) => {
    console.log(this.movieData)
    this.moviesService.getDiscover(genre).subscribe((response: any) => {
      console.log(response)
      this.movieData = response
    })
  }
  onRatingSubmit = (rating: string) => {
    console.log(rating)
    this.moviesService.getAverageRating(rating).subscribe((response: any) => {
      console.log(response)
      this.movieData = response
    })
  }


  onWatch = (movie: any): void => {
    this.moviesService.toggleWatchList(movie);
    this.getAndSetWatchList();
  }

  getAndSetWatchList = (): void => {
    this.watchList = this.moviesService.getWatchList();
  }


}
