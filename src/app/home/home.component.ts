import { Component, HostListener } from '@angular/core';
import { ContactService, Resumecount } from '../service/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private portfolioService: ContactService, private fb: FormBuilder, private service: ContactService) { }


  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/Viveka_CV.pdf';
    link.download = 'Viveka_CV.pdf';
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

  contactForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.service.postData(this.contactForm.value).subscribe({
        next: (res) => {
          this.successMessage = 'Form Submitted Successfully';
          this.errorMessage = null;
          //console.log('Form submitted:', this.contactForm.value);
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        },
        error: (err) => {
          console.error('Error submitting form:', err);
          this.errorMessage = 'An error occurred. Please try again later.';
          this.successMessage = null;
          //alert(this.errorMessage);  // Display error alert
        }
      });
      this.contactForm.reset();
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
      this.successMessage = null;
      //  alert(this.errorMessage);  // Display validation error alert
    }
  }

}
