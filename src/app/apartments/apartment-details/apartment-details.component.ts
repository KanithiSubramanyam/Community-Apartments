import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'apartment-details',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './apartment-details.component.html', // Use an external HTML file for the template
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent {
  apartment:any
  // The extra details about the apartments
  apartmentDetails = [
    {
      name: 'Apartment Name 1',
      description: 'This apartment offers stunning views and top-notch facilities.',
      amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Parking'],
    },
    {
      name: 'Apartment Name 2',
      description: 'A luxurious apartment with modern features.',
      amenities: ['Private Balcony', 'WiFi', 'Pet Friendly', 'Playground'],
    },
    {
      name: 'Apartment Name 3',
      description: 'Spacious and comfortable, with all modern amenities.',
      amenities: ['Clubhouse', 'BBQ Area', 'Concierge Service', 'Spa'],
    },
    {
      name: 'Apartment Name 4',
      description: 'Cozy apartment with beautiful interiors.',
      amenities: ['Library', 'Game Room', 'Tennis Court', 'Garden'],
    },
    {
      name: 'Apartment Name 5',
      description: 'Perfect for families, with a community vibe.',
      amenities: ['Jogging Track', 'Yoga Room', 'Laundry Service', 'Cafe'],
    },
    {
      name: 'Apartment Name 6',
      description: 'Elegant and stylish apartment with great amenities.',
      amenities: ['Rooftop Lounge', 'Cinema Room', 'Bicycle Storage', 'Sauna'],
    },
    {
      name: 'Apartment Name 7',
      description: 'An apartment with a peaceful and relaxing atmosphere.',
      amenities: ['Fire Pit', 'Dog Park', 'Electric Charging Stations', 'Grocery Service'],
    },
    {
      name: 'Apartment Name 8',
      description: 'Modern living with convenience and style.',
      amenities: ['Business Center', 'Art Studio', 'Meditation Zone', 'Free Shuttle'],
    },
    {
      name: 'Apartment Name 9',
      description: 'A premium apartment with exclusive access.',
      amenities: ['Wine Cellar', 'Helipad', 'VIP Parking', 'Smart Home Features'],
    },
  ];


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const apartmentName = this.route.snapshot.paramMap.get('name');
    this.apartment = this.apartmentDetails.find((apt) => apt.name === apartmentName);
  }
}
