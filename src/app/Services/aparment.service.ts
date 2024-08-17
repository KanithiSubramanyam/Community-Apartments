import { Injectable } from '@angular/core';

// Define the interface for a detailed apartment, including all properties
export interface Apartment {
  name: string;
  price: string;
  availability: string;
  imageUrl: string;
  features: string[];
  description: string;  // Detailed description of the apartment
  amenities: string[];  // List of amenities provided
  houseRules?:string[];
  cancellation:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  // List of apartments with detailed information
  private apartments: Apartment[] = [
    {
      name: 'Apartment Name 1',
      price: '$1,200/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-1.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 2',
      price: '$1,500/month', 
      availability: 'Not Available',
      imageUrl: 'assets/apar-2.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 3',
      price: '$1,800/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-3.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 4',
      price: '$1,200/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-4.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 5',
      price: '$1,400/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-5.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 6',
      price: '$1,500/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-6.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 7',
      price: '$1,300/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-7.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 8',
      price: '$1,600/month',
      availability: 'Not Available',
      imageUrl: 'assets/apar-8.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    },
    {
      name: 'Apartment Name 9',
      price: '$1,700/month',
      availability: 'Available-Book Now',
      imageUrl: 'assets/apar-9.jpg',
      features: ['car', 'wifi', 'bed', 'utensils', 'dumbbell', 'tree'],
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
      cancellation: 'Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor. Cancel up to 14 days to get a full refund.'
    }
  ];

  // Method to get a list of apartments with basic information
  getApartments(): Omit<Apartment, 'description' | 'amenities'>[] {
    return this.apartments.map(({ description, amenities, ...basicDetails }) => basicDetails);
  }

  // Method to get detailed information of a specific apartment by name
  getApartmentDetails(name: string): Apartment | undefined {
    return this.apartments.find(apartment => apartment.name === name);
  }
}
