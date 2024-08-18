import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone:true,
  templateUrl: './contact.component.html',
  imports:[CommonModule,ReactiveFormsModule],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; // Use definite assignment assertion
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // Handle form submission logic here
    console.log('Form Submitted!', this.contactForm.value);

    // Reset the form after submission
    this.contactForm.reset();
    this.submitted = false; // Reset submission status
  }
}
