import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    alert('Form Submitted'); // Corrected alert usage
    console.log('Form submitted:', this.contact);

    // Reset form fields
    this.contact = {
      name: '',
      email: '',
      message: ''
    };

    // You can add your form submission logic here, like sending an email or saving data
  }
}
