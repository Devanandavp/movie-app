import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports:[FormsModule,DatePipe,CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchQuery: string = '';
  filters = {
    language: '',
    releaseYear: '',
    genre: '',
  };

  constructor(
    private movieService: MovieService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.results;
      this.filteredMovies = this.movies;
    });
  }

  onSearch(query: string): void {
    const trimmed = query.trim();
    if (trimmed) {
      this.http
        .get(
          `${environment.apiUrl}/search/movie?query=${trimmed}&api_key=${environment.apiKey}`
        )
        .subscribe((resp: any) => {
          this.movies = resp.results;
          this.filteredMovies = this.movies;
          this.applyFilters();
        });
    } else {
      this.loadMovies();
    }
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    const q = this.searchQuery.toLowerCase();
    this.filteredMovies = this.movies.filter((movie) => {
      const matchesSearch = q
        ? movie.title.toLowerCase().includes(q)
        : true;
      const matchesLang = this.filters.language
        ? movie.original_language === this.filters.language
        : true;
      const matchesYear = this.filters.releaseYear
        ? movie.release_date.startsWith(this.filters.releaseYear)
        : true;
      const matchesGenre = this.filters.genre
        ? movie.genre_ids.includes(+this.filters.genre)
        : true;
      return (
        matchesSearch && matchesLang && matchesYear && matchesGenre
      );
    });
  }

  goToDetails(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }
}
