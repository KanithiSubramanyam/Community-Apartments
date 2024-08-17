import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ApartmentService,Apartment } from '../Services/aparment.service'; 

@Component({
  selector: 'apartments',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent implements OnInit {
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";

  apartments: Omit<Apartment, 'description' | 'amenities'>[] = [];

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit() {
    this.apartments = this.apartmentService.getApartments();
  }
}
