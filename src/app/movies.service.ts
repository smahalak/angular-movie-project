import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = '1d968137255dc88ed1d127e4325143f1'
  movieBaseUrl: string = 'https://api.themoviedb.org/3/movie/popular'
  searchMovieURL: string = 'https://api.themoviedb.org/3/search/movie'
  genreURL: string = 'https://api.themoviedb.org/3/genre/movie/list'
  discoverURL: string = 'https://api.themoviedb.org/3/discover/movie'


  watchList: any[] = [];


  constructor(private http: HttpClient) { }
  getPopularMovies = () => {
    return this.http.get(this.movieBaseUrl, {
      params: { api_key: this.apiKey },
    })
  }
  searchTitle = (searchTerm: string): any => {
    console.log('gotHere')
    return this.http.get(this.searchMovieURL, {
      params: {
        api_key: this.apiKey,
        query: searchTerm,
        include_adult: 'false',
      },
    })
  }
  getGenresService = (): any => {
    return this.http.get(this.genreURL, {
      params: { api_key: this.apiKey },
    })
  }
  getDiscover = (genre: string): any => {
    return this.http.get(this.discoverURL, {
      params: { api_key: this.apiKey, with_genres: genre },
    })
  }

  getAverageRating = (rating: string): any => {
    return this.http.get(this.discoverURL, {
      params: { api_key: this.apiKey, 'vote_average.gte': rating },
    })
  }





  getWatchList = (): any => {
    return this.watchList;
  }


  toggleWatchList = (movie: any) => {
    let index = this.watchList.findIndex((item) => {
      return item.id === movie.id;
    });
    if (index === -1) {
      this.watchList.push(movie);
    } else {
      this.watchList.splice(index, 1);
    }


    console.log(this.watchList);
  }



}
