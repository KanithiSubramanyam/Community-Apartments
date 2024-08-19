import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { Services } from '../Models/services';
import { AboutUsMainComponent } from "./about-us-main/about-us-main.component";
import { BreadcrumComponent } from '../Utilites/breadcrum/breadcrum.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [CommonModule, CounterComponent, RouterLink, AboutUsMainComponent, BreadcrumComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutUs1 = "assets/interior-2.jpg";
  aboutUs2 = "assets/homeAboutUs-2.jpg";
  hotelIcon = "assets/hotelIcon.png";
  aboutUsAchivements = "assets/aboutUsAchivements.jpg";
  pp = "assets/pp.jpg";

  services : Services[] ;

  servicesService : ServicesService = inject(ServicesService);

  breadcrumData = 
    {
      title : "The Ultimate Luxury",
      subtitle : "SGS Apartments",
    }
  

  ourTeam : Array<any> = [
    {
      name : "John Doe",
      position : "President",
      image : "assets/pp.jpg",
      description : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      facebook : "#",
      twitter : "#",
      instagram : "#",
      linkedin : "#",
    },
    {
      name : "Sirisha ",
      position : "Vice President",
      description : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      image : "assets/wp.jpg",
      facebook : "#",
      twitter : "#",
      instagram : "#",
      linkedin : "#",
    },
    {
      name : "Mark Wood",
      position : "Manager",
      description : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      image : "assets/pp.jpg",
      facebook : "#",
      twitter : "#",
      instagram : "#",
      linkedin : "#",
    },
    {
      name : "Melly Wise",
      position : "Assitant Manager",
      description : `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      image : "assets/wp.jpg",
      facebook : "#",
      twitter : "#",
      instagram : "#",
      linkedin : "#",
    },
  ]

  countOfUsers = 1500;
  countOfFlats = 620;
  totalArea = 15000;
  countOfEvents = 34;

  ngOnInit() {
    this.services = this.servicesService.getServices();
  }
}
