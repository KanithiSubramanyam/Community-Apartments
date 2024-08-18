import { Injectable } from "@angular/core";
import { Services } from "../services";


@Injectable({
    providedIn: 'root'
})
export class ServicesService {

    private services : Services[] = [
        {
            name : '24/7 security',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            icon : 'fa-solid fa-shield-halved'
        },
        {
            name : 'free high speed wifi',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            icon : 'fa-solid fa-wifi'
        },

        {
            name : 'Washer dryer',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            icon : 'fa-solid fa-hands-bubbles'
        },

        {
            name : 'Pet care',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            icon : 'fa-solid fa-paw'
        },

        {
            name : 'Furniture cleaning & repair',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            icon : 'fa-solid fa-bed'
        },
        {
            name : 'Automobile shipping & storage',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et ipsum exercitationem porro tempore deserunt!',
            icon : 'fa-solid fa-truck-front'
        }
    ];

    getServices() {
        if(this.services.length > 0) {
            return this.services;
        }
        return [];
    }
}