import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey: string = '1d968137255dc88ed1d127e4325143f1';
  movieBaseUrl: string =
    'https://api.themoviedb.org/3/movie/popular?api_key=1d968137255dc88ed1d127e4325143f1&language=en-US&page=';

  constructor(private http: HttpClient) { }


  getPopularMovies = () => {
    return this.http.get(this.movieBaseUrl, {
      params: { api_key: this.apiKey },
    })
  }

}
