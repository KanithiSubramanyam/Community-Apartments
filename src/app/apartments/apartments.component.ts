import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ApartmentService } from '../Models/Services/aparment.service'; 
import { Apartment } from '../Models/apartment';
import { BreadcrumComponent } from '../Utilites/breadcrum/breadcrum.component';

@Component({
  selector: 'apartments',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, BreadcrumComponent],
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent implements OnInit {
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";

  apartments: Omit<Apartment, 'description' | 'amenities'>[] = [];

  breadcrumData = 
  {
    title : "A Dream Home",
    subtitle : "SGS Apartments",
  }

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit() {
    this.apartments = this.apartmentService.getApartments();
  }
}
