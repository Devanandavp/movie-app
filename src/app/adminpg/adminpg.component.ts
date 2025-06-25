import { Component } from '@angular/core';
import { MovieServices } from '../movie.service';
import { Movie } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-adminpg',
  imports: [ FormsModule,CommonModule],
  templateUrl: './adminpg.component.html',
  styleUrl: './adminpg.component.css'
})
export class AdminpgComponent {
name = '';
  year = '';
  description = '';
  language = '';
  rating = '';

  constructor(private movieService:MovieServices) {}

  add() {
    const movie: Movie = {
      title: this.name,
      year: this.year,
      description: this.description,
      language: this.language,
      rating: this.rating,
    };

    this.movieService.addMovie(movie).subscribe({
      next: (res) => {
        alert('Movie added successfully!');
        console.log('Response:', res);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Oops! Could not add movie.');
      }
    });
  }

  resetForm() {
    this.name= '';
    this.year = '';
    this.description = '';
    this.language = '';
    this.rating = '';
  }
}

