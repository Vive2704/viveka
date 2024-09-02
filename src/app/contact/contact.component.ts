import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private fb: FormBuilder, private service: ContactService) { }

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
