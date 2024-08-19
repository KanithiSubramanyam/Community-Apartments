import { Injectable } from '@angular/core';
import { Apartment } from '../Models/apartment';
<<<<<<< HEAD

=======
import { map, Observable, of } from 'rxjs';
>>>>>>> c2dfc1f9b0b50c6d0b0c1c5769670387fa3bfcb0


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  
  private apartments: Apartment[] = [
    {
      name: 'Apartment Name 1',
      price: '$1,200/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/garden-3.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'This apartment offers stunning views and top-notch facilities.Spacious double-bedroom apartment with a modern kitchen and stunning city views. Includes a private balcony and access to a state-of-the-art gym.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 2',
      price: '$1,500/month', 
      availability: 'Not Available',
      imageUrl: 'assets/apar-2.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'A luxurious apartment with modern features.Elegant apartment featuring a large master suite and an open-concept living area. Enjoy exclusive amenities such as a rooftop pool and 24/7 concierge service.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 3',
      price: '$1,800/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apartment-2.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'Spacious and comfortable, with all modern amenities.Spacious double-bedroom apartment with a modern kitchen and stunning city views. Includes a private balcony and access to a state-of-the-art gym.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 4',
      price: '$1,200/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-4.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'Cozy apartment with beautiful interiors.Elegant apartment featuring a large master suite and an open-concept living area. Enjoy exclusive amenities such as a rooftop pool and 24/7 concierge service.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 5',
      price: '$1,400/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-5.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'Perfect for families, with a community vibe.Spacious double-bedroom apartment with a modern kitchen and stunning city views. Includes a private balcony and access to a state-of-the-art gym.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 6',
      price: '$1,500/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-6.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'Elegant and stylish apartment with great amenities.Elegant apartment featuring a large master suite and an open-concept living area. Enjoy exclusive amenities such as a rooftop pool and 24/7 concierge service.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 7',
      price: '$1,300/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-7.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'An apartment with a peaceful and relaxing atmosphere.Spacious double-bedroom apartment with a modern kitchen and stunning city views. Includes a private balcony and access to a state-of-the-art gym.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 8',
      price: '$1,600/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-8.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'Modern living with convenience and style.Elegant apartment featuring a large master suite and an open-concept living area. Enjoy exclusive amenities such as a rooftop pool and 24/7 concierge service.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    },
    {
      name: 'Apartment Name 9',
      price: '$1,700/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-9.jpg',
      features: ['Cellur Parking with security', 'wifi Throughout Apartment', 'Fully Furnished Flats', 'Fitness Center with Air Conditioner', 'Natured Child play area'],
      description: 'A premium apartment with exclusive access.Spacious double-bedroom apartment with a modern kitchen and stunning city views. Includes a private balcony and access to a state-of-the-art gym.',
      amenities: ['Swimming Pool: Enjoy a luxurious, resort-style swimming pool for relaxation and recreation.', 
        'Gym: Stay fit and healthy with access to our fully equipped gym.', 
        '24/7 Security: Feel safe and secure with our round-the-clock security services.', 
        'Parking: Convenient on-site parking available for residents and guests.',
        'Kitchen: Experience the joy of cooking in a modern, fully furnished kitchen.',
        'High-Speed Wi-Fi: Stay connected with complimentary high-speed internet access throughout the apartment.'],
      houseRules: [
        'No smoking, parties or events.',
        'Check-in time from 2 PM, check-out by 10 AM.',
        'Time to time car parking.',
        'Download Our minimal app.',
        'Browse regularly on our website.',
      ],
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.',
      icons : ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree']
    }
  ];

  // Method to get a list of apartments with basic information
  getApartments(): Observable<Apartment[]> {
    return of(this.apartments);
  }

  // Method to get detailed information of a specific apartment by name
  getApartmentDetails(name: string): Apartment | undefined {
    return this.apartments.find(apartment => apartment.name === name);
  }

  getAllApartments(): Apartment[] {
    return this.apartments;
  }
}
