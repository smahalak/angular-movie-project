import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieRef: any
  @Input() watchListRef: any = [];
  @Output() watchListEvent = new EventEmitter<any>()
  displayDetails: boolean = false

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

  }

  toggleCard = () => {
    this.displayDetails = !this.displayDetails
  }


  emitWatchListEvent = (movie: any): void => {
    this.watchListEvent.emit(movie);

  }

  checkWatchList = (movie: any): boolean => {
    return this.watchListRef.some((item) => {
      return item.id === movie.id;
    })
  }

}
