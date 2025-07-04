import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { AdminpgComponent } from './adminpg/adminpg.component';
import { FormsModule } from '@angular/forms';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { AdminpgComponent } from './adminpg/adminpg.component';
import { NgModule } from '@angular/core';
import {VoiceSearchComponent} from './voice-search/voice-search.component';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-app';
}
