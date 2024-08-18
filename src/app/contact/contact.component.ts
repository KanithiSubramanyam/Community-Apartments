import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BreadcrumComponent } from "../Utilites/breadcrum/breadcrum.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [CommonModule, ReactiveFormsModule, ContactFormComponent, BreadcrumComponent],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";

  formData: FormGroup;
  breadcrumData = 
  {
    title : "For Our Support",
    subtitle : "Contact",
  }

  getFormData(value: any) {
    this.formData = value;
  }

}
