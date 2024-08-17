import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';
import { ApartmentService } from '../../Services/aparment.service';  
import { CommonModule } from '@angular/common';
import { Apartment } from '../../Models/apartment';

@Component({
  selector: 'apartment-details',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterModule],
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit {
  apartment?: Apartment;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit() {
    const apartmentName = this.route.snapshot.paramMap.get('name');
    if (apartmentName) {
      this.apartment = this.apartmentService.getApartmentDetails(apartmentName);
    }
  }
}
