import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  getDiscover () {
    return this.http.get('https://api.themoviedb.org/3/discover/movie/?api_key=8d4af2ffc1f98bc84d06dc9d4ff48193&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31');;
  }
  
}

