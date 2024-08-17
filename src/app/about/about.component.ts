import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about',
  standalone: true,
  imports: [CommonModule, CounterComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutUs1 = "assets/interior-2.jpg";
  aboutUs2 = "assets/homeAboutUs-2.jpg";
  hotelIcon = "assets/hotelIcon.png";
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";
  aboutUsAchivements = "assets/aboutUsAchivements.jpg";
  pp = "assets/pp.jpg";
}
