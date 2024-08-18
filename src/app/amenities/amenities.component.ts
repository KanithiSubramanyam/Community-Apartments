import { Component } from '@angular/core';
import { BreadcrumComponent } from '../Utilites/breadcrum/breadcrum.component';

@Component({
  selector: 'amenities',
  standalone: true,
  imports: [BreadcrumComponent],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css'
})
export class AmenitiesComponent {
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";

  amenities = [];
  breadcrumData = 
  {
    title : "The Ultimate Luxury",
    subtitle : "SGS Apartments Amenities",
  }
}
