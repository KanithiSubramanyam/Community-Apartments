import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Services } from '../Models/services';
import { ServicesService } from '../Services/services.service';
import { AboutUsMainComponent } from '../about/about-us-main/about-us-main.component';
import { Apartment } from '../Models/apartment';
import { ApartmentService } from '../Services/aparment.service';
import { map } from 'rxjs';
import {AmenitiesService} from '../Services/amenities.service';
import { Amenities } from '../Models/amenities';
import { ContactFormComponent } from '../contact/contact-form/contact-form.component';
@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, AboutUsMainComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  homePage = "assets/homepage.jpg";
  homePageSmall = "assets/homeAboutUs-1.jpg"

  interior1 = "assets/interior-1.jpg";
  gym = "assets/gym-1.jpg";
  pool = "assets/swimming-2.jpg";
  yoga = "assets/yoga-1.jpg";
  sport = "assets/sport.jpg";
  pp = "assets/pp.jpg";
  noImage = "assets/no-image.jpg";
  services : Services[] ;
  apartments : Apartment[] ;
  amenities : Amenities[];
  servicesService : ServicesService = inject(ServicesService);
  apartmentService : ApartmentService = inject(ApartmentService);
  aminitieService : AmenitiesService = inject(AmenitiesService);

  ngOnInit() {
    this.services = this.servicesService.getServices();
    this.apartments = this.apartmentService.getAllApartments().slice(0, 3);
    this.amenities = this.aminitieService.getAllAmenities();
  }
}
