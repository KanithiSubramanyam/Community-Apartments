import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'apartments',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink, RouterLinkActive],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css'
})
export class ApartmentsComponent {
  apartments = [
    {
      name: 'Apartment Name 1',
      price: '$1,200/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-1.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 2',
      price: '$1,500/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-2.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 3',
      price: '$1,800/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-3.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 4',
      price: '$1,200/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-4.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 5',
      price: '$1,400/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-5.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 6',
      price: '$1,500/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-6.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 7',
      price: '$1,300/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-7.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 8',
      price: '$1,600/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-8.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 9',
      price: '$1,700/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-9.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    }
  ];

  

}
