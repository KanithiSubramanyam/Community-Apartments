import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';
import { ApartmentService } from '../../Services/aparment.service';  
import { CommonModule } from '@angular/common';
import { Apartment } from '../../Models/apartment';
import { BreadcrumComponent } from '../../Utilites/breadcrum/breadcrum.component';
import { title } from 'process';

@Component({
  selector: 'apartment-details',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterModule, BreadcrumComponent],
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit {
  apartment?: Apartment;
  apartmentFeaturesWithIcons: { feature: string; icon: string }[] = [];
  breadcrumData = {
    title: 'Apartment Details',
    subtitle: ''
  };
  apartmentsData: Apartment[] = [];

  apartmentService: ApartmentService = inject(ApartmentService);
  currentRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // Subscribe to changes in the route parameters
    this.currentRoute.paramMap.subscribe(paramMap => {
      const apartmentName = paramMap.get('name');
      if (apartmentName) {
        this.loadApartmentDetails(apartmentName);

        this.apartmentsData = this.apartmentService.getAllApartments().filter(apartment => apartment.name !== apartmentName);;
      }
    });

  }

  loadApartmentDetails(apartmentName: string) {
    this.apartment = this.apartmentService.getApartmentDetails(apartmentName);
    if (this.apartment) {
      this.breadcrumData.subtitle = this.apartment.name;
      this.apartmentFeaturesWithIcons = this.apartment.features.map((feature, index) => ({
        feature: feature,
        icon: this.apartment.icons[index]
      }));
    }
  }
}
