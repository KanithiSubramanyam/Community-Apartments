import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about-us-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-us-main.component.html',
  styleUrl: './about-us-main.component.css'
})
export class AboutUsMainComponent {
  aboutUs1 = "assets/interior-2.jpg";
  aboutUs2 = "assets/homeAboutUs-2.jpg";
  hotelIcon = "assets/hotelIcon.png";
  aboutUsBackground = "assets/aboutUsBackground.jpg";
}
