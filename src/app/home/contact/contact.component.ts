import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
    const ACCESS_KEY = 'fb170b52-4c69-4867-8b64-c977aef1a84c'; // Replace with your Web3Forms access key.

    const payload = {
      access_key: ACCESS_KEY,
      ...this.formData,
    };

    axios
      .post(WEB3FORMS_URL, payload)
      .then((response) => {
        alert('Your message has been sent!');
        this.formData = { name: '', email: '', subject: '', message: '' }; // Reset form
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  }
}