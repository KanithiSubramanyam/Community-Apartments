import { Injectable } from "@angular/core";
import { Amenities } from "../amenities";

@Injectable({
    providedIn: 'root'
})
export class AmenitiesService {
    amenities: Amenities[] = [
        {
            id: 1,
            title: 'Fitness Center',
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
              porro tempore deserunt! Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
              porro tempore deserunt!`,
            images: ['assets/gym-1.jpg'],
        },
        {
            id: 2,
            title: 'Indoor Games',
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor 
             sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
             porro tempore deserunt! Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
              porro tempore deserunt!`,
            images: ['assets/yoga-1.jpg'],
        },
        {
            id: 3,
            title: 'Lounge And Cafe',
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
             sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
             porro tempore deserunt! Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
              porro tempore deserunt!`,
            images: ['assets/kitchens.jpg'],
        },
        {
            id: 4,
            title: 'Basketball Court',
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Nobis et ipsum exercitationem porro tempore deserunt! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Nobis et 
              ipsum exercitationem porro tempore deserunt! Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
              porro tempore deserunt!`,
            images: ['assets/yoga-2.jpg'],
        },
        {
            id: 5,
            title: 'Swimming Pool',
            description: `Lorem, ipsum dolor sit amet consectetur 
             elit. Nobis et ipsum exercitationem porro tempore deserunt! 
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
             Nobis et ipsum exercitationem porro tempore deserunt! Nobis et ipsum exercitationem porro tempore deserunt! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem 
              porro tempore deserunt!`,
            images: ['assets/swimming-2.jpg'],
        },

    ];

    getAllAmenities() {
        return this.amenities;
    }
}