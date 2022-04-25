import { Component, OnInit } from '@angular/core';
import { DataMoviesService } from '../services/data-movies.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas : Observable<any>;
  constructor(private dataMovies: DataMoviesService) {}

  ngOnInit(): void {
    this.peliculas.getDiscover();
  }
}
