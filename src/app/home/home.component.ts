import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';
import { MovieSummary } from '../movie.service';
import { Component, OnInit } from '@angular/core';
interface Movie {
  title: string;
  release_date: string;
  vote_average: number;
 backdrop_path?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[CommonModule]
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
    this.movies = data.results.map((movie: { title: string; release_date: string; vote_average: number;backdrop_path:string}) => ({
    title: movie.title,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    backdrop_path:movie.backdrop_path
}));

      },
      error: (err) => console.error('Fetch error', err)
    });
  }
}
