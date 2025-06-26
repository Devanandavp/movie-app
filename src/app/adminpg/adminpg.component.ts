import { Component } from '@angular/core';
import { Movies, MovieService} from '../movie.service';
import { Movie } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { MovieService, Movie } from '../movie.service';
@Component({
  selector: 'app-adminpg',
  imports: [ FormsModule,CommonModule],
  templateUrl: './adminpg.component.html',
  styleUrl: './adminpg.component.css'
})
export class AdminpgComponent {
  name = '';
  year = 0;
  description = '';
  language = '';
  rating = 0;
  constructor(private movieService:MovieService) {}
  add() {
    const movie: Movies= {
  name:this.name,
    year:this.year,
    description : this.description,
    language: this.language,
    rating: this.rating};

    this.movieService.createMovie(movie).subscribe({
      next: (res:any) => {
        alert('Movie added successfully!');
        console.log('Response:', res);
        this.resetForm();
      },
      error: (err:any) => {
        console.error('Error:', err);
        alert('Oops! Could not add movie.');
      }
    });
  }

   resetForm(): void {
    this.name = '';
    this.year = 0;
    this.description = '';
    this.language = '';
    this.rating = 0;
  }
}

