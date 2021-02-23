import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieRef: any
  displayDetails: boolean = false

  constructor() {}

  ngOnInit(): void {}

  toggleCard = () => {
    this.displayDetails = !this.displayDetails
  }
}
