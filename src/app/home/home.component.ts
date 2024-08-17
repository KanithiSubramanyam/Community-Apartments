import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homePage = "assets/homepage.jpg";
  aboutUs1 = "assets/interior-2.jpg";
  aboutUs2 = "assets/homeAboutUs-2.jpg";
  hotelIcon = "assets/hotelIcon.png";
  aboutUsBackground = "assets/aboutUsBackground.jpg";
  interior1 = "assets/interior-1.jpg";
  gym = "assets/gym-1.jpg";
  pool = "assets/swimming-2.jpg";
  yoga = "assets/yoga-1.jpg";
  sport = "assets/sport.jpg";
  pp = "assets/pp.jpg";
  map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30390.27949824966!2d83.36069799999999!3d17.8018018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723884622085!5m2!1sen!2sin";
}
