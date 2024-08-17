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
}
