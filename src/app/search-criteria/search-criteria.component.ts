import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() genreEvent = new EventEmitter<string>();
  genres: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  emitSearchTerm = (form: NgForm) => {
    console.log(form);

    this.searchEvent.emit(form.form.value.searchTerm);
    // this.searchEvent.emit(form.form.value.genre)
    // this.searchEvent.emit(form.form.value.rating)
  };

  getGenres = () => {
    this.moviesService.getGenresService().subscribe((response) => {
      this.genres = response;
      console.log(response);
    });
  };

  emitGenre = (form: NgForm) => {
    console.log(form.form.value.genre);
    this.genreEvent.emit(form.form.value.genre);
  };
}
