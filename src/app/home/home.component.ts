import { Component, HostListener } from '@angular/core';
import { ContactService, Resumecount } from '../service/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private portfolioService: ContactService) {}

 
  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/SIVARAAJ_CV.pdf';
    link.download = 'SIVARAAJ_CV.pdf';
    link.click();
    this.incrementResumeCount();
  }



  incrementResumeCount() {
    this.portfolioService.postResume().subscribe(
      (response: Resumecount) => {
       // console.log('Resume count incremented:', response.count);
      },
      (error) => {
        console.error('Error incrementing resume count:', error);
      }
    );
  }


   
}
