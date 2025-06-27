import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports:[CommonModule, FormsModule],
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = { name: '', email: '', phoneNumber: '', feedback: '' };
  responseData: any;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const payload = {
      name: this.user.name,
      phoneNumber: this.user.phoneNumber,
      email: this.user.email,
      feedback: this.user.feedback
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post<any>('http://localhost:3000/api/submit-feedback', payload, { headers })
      .subscribe({
        next: (response) => {
          this.responseData = response;
          alert('Feedback submitted successfully!');
          console.log('Submission successful:', response);
          this.resetForm();
        },
        error: (error) => {
          this.errorMessage = 'Failed to send data';
          alert(this.errorMessage);
          console.error('Submission failed:', error);
        }
      });
  }

  private resetForm(): void {
    this.user = { name: '', email: '', phoneNumber: '', feedback: '' };
  }
}
