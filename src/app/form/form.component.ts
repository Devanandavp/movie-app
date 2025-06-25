import { Component } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-form',
  imports: [FormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  user = { name: '', email: '',phoneNumber:'',feedback: '' };
  responseData: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}
onSubmit(): void {
  this.http
    .post<any>('http://localhost:3000/api/submit-feedback', this.user)
    .subscribe({
      next: (response) => {
        this.responseData = response;
        console.log('Submission successful:', response);
      },
      error: (error) => {
        this.errorMessage = 'Failed to send data';
        console.error('Submission failed:', error);
      },
    });
}

}