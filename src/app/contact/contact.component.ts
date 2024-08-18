import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [CommonModule, ReactiveFormsModule, ContactFormComponent],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";

  formData: FormGroup;

  getFormData(value: any) {
    this.formData = value;
  }

}
