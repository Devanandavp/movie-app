import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private http:HttpClient,private router: Router){}
  login() {
    const body = {
      username: this.username,
      password: this.password
    };
    this.http.post('http://localhost:3000/api/login', body).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.errorMessage = 'Invalid username or password'
    });
  }
}

