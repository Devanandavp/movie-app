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
  movies:any[]=[];
  searchQuery: string = '';
  filteredMovies:any;
  filters = {
    language: '',
    releaseYear: '',
    genre: '',
  };

  constructor(private movieService: MovieService,private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.results;
    });
  }
  onSearch(query: string): void {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      this.http
        .get(`${environment.apiUrl}/search/movie?query=${trimmedQuery}&api_key=${environment.apiKey}`)
        .subscribe((response: any) => {
          this.movies = response.results;
        });
    } else {
      this.loadMovies();
    }
  }
  onSearchChange(): void {
    if (this.searchQuery) {
      this.movieService.getMovies().subscribe(data => {
        this.movies = data.results.filter((movie: Movie) =>
          movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    } else {
      this.loadMovies();
    }
  }

  onFilterChange(): void {
    this.applyFilters();
  }
  applyFilters(): void {
    this.filteredMovies = this.movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesLanguage = this.filters.language ? movie.original_language === this.filters.language : true;
      const matchesYear = this.filters.releaseYear ? movie.release_date.includes(this.filters.releaseYear) : true;
      const matchesGenre = this.filters.genre ? movie.genre_ids.includes(Number(this.filters.genre)) : true;
            return matchesSearch && matchesLanguage && matchesYear && matchesGenre ;
    });
  }
  goToDetails(movie: Movie) {
  this.router.navigate(['/movie', movie.id]);
}

}
