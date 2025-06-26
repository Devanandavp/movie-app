import { Component } from '@angular/core';
import { Movies, MovieService} from '../movie.service';
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
  year: number | null = null;
  description = '';
  language = '';
  rating: number | null = null;

  constructor(private movieService: MovieService) {}

  add(): void {
    if (!this.name || !this.year || !this.description || !this.language || !this.rating) {
      alert('Please fill in all fields.');
      return;
    }

    const movie: Movies = {
      name: this.name,
      year: this.year,
      description: this.description,
      language: this.language,
      rating: this.rating
    };

    this.movieService.createMovie(movie).subscribe({
      next: (res) => {
        if (res.status === 201 || res.status === 200) {
          alert('Movie added successfully!');
        } else {
          alert(`Unexpected response: ${res.status}`);
        }
        this.resetForm();
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Oops! Could not add the movie.');
      }
    });
  }

  resetForm(): void {
    this.name = '';
    this.year = null;
    this.description = '';
    this.language = '';
    this.rating = null;
  }
}

