import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey: string = '1d968137255dc88ed1d127e4325143f1';
  movieBaseUrl: string =
    'https://api.themoviedb.org/3/movie/popular';

  searchMovieURL: string = 'https://api.themoviedb.org/3/search/movie';

  genreMovieURL: string = 'https://api.themoviedb.org/3/genre/movie/list';

  discoverURL: string = ""


  constructor(private http: HttpClient) { }


  getPopularMovies = () => {
    return this.http.get(this.movieBaseUrl, {
      params: { api_key: this.apiKey },
    })
  }

  getGenresService = (): any => {
    return this.http.get(this.genreMovieURL, {
      params: { api_key: this.apiKey },
    })
  }

  searchTitle = (searchTerm: string): any => {
    console.log('gotHere');

    return this.http.get(this.searchMovieURL, {
      params: {
        api_key: this.apiKey,
        query: searchTerm,
        include_adult: 'false',
      }
    })
  }




}
