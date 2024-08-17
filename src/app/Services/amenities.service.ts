import { Injectable } from "@angular/core";
import { Amenities } from "../Models/amenities";

@Injectable({
    providedIn: 'root'
})
export class AmenitiesService{
    amenities: Amenities[] = [
        {
            id: 1,
            title: 'Fitness Center',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            images: ['assets/images/amenities/breakfast.png'],
        },
        {
            id: 2,
            title: 'Indoor Games',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            images: ['assets/images/amenities/breakfast.png'],
        },
        {
            id: 3,
            title: 'Lounge And Cafe',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            images: ['assets/images/amenities/breakfast.png'],
        },
        {
            id: 4,
            title: 'Basketball Court',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            images: ['assets/images/amenities/breakfast.png'],
        },
        {
            id: 5,
            title: 'Swimming Pool',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            images: ['assets/images/amenities/breakfast.png'],
        },

    ];
}