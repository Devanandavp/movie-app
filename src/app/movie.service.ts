import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { environment } from '../../environment';

export interface MovieSummary {
  title: string;
  release_date: string;
  vote_average: number;
}
export interface Movie {
  title: string;
  year: string;
  description: string;
  language: string;
  rating: string;
}
@Injectable({ providedIn: 'root' })
export class MovieService {
  apikey:any;
  constructor(private http: HttpClient) {
    this.apikey=environment.apiUrl;
  }
  getMovies(): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}`);
  }
}
  export class MovieServices{
    apiUrl:any;
    constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000/api/admin/create-movie';
    }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }
}
export class MovieDetail {
  private key = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovieDetails(id: number): Observable<MovieDetail> {
    const url = `/movie/${id}?api_key=${this.key}`;
    return this.http.get<MovieDetail>(url);
  }
}
