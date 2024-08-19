import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  formData : FormGroup;

  alert : boolean = false;

  @Output() formDataEmitter: EventEmitter<any> = new EventEmitter<any>();

  
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null ,[ Validators.required]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      address: new FormControl(null ,[ Validators.required]),
      contactNumber: new FormControl(null ,[ Validators.required, Validators.pattern(/^\d{10}$/)]),
      message: new FormControl(null ,[ Validators.required]),
    });
  }



  onFormSubmitted(): void {
    // console.log(this.contactForm.value);
    this.formData = this.contactForm.value;
    console.log(this.formData);

    // this.contactForm.reset();
    this.contactForm.reset({
      name : '',
      email :  '',
      address :'',
      contactNumber : '',
      message : '',
    });

    this.formDataEmitter.emit(this.formData);

    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 3000);
  }
}
