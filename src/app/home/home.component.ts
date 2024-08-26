import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
   downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/SIVARAAJ_CV.pdf';
    link.download = 'SIVARAAJ_CV.pdf';
    link.click();
  }
}
