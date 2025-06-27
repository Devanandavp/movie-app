import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-moviedetail',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  movie: any;
  cast: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("this is the id: ",id);
    this.movieService.getMovieById(id).subscribe(data => {
      this.movie = data;
    });
    this.movieService.getMovieCast(id).subscribe(data => {
      this.cast = data.cast;
    });
  }}

