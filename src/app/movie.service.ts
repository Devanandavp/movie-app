import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
   year: string; 
}
export interface Movies {
  name: string;
  year: number;
  description: string;
  language: string;
  rating: number;
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieCast(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}&language=en-US`);
  }

  createMovie(movieData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`http://localhost:3000/api/admin/create-movie`, movieData, { headers, observe: 'response' });
  }
}
