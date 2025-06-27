import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgIf} from '@angular/common';
import {HomeComponent} from '../home/home.component';

 
@Component({
  selector: 'app-voice-search',
  templateUrl: './voice-search.component.html',
  imports: [NgIf],
  styleUrls: ['./voice-search.component.css']
})
export class VoiceSearchComponent {
  @ViewChild('speechText') speechTextRef!: ElementRef<HTMLInputElement>;
 
  recognition: any;
  isRecording = false;
 
  constructor(private home:HomeComponent) {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
 
    this.recognition.onresult = (event: any) => {
      let saidText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        saidText += event.results[i][0].transcript;
      }
      this.speechTextRef.nativeElement.value = saidText;
      console.log(saidText);
      home.onSearch(saidText);

      // Optional: you can emit the result or call your movie search logic here
    };
 
    this.recognition.onend = () => {
      this.isRecording = false;
    };
  }
 
  startRecording() {
    this.isRecording = true;
    this.recognition.start();
  }
 
  stopRecording() {
    this.isRecording = false;
    this.recognition.stop();
  }
}