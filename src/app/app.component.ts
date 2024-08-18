import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,AmenitiesComponent, ApartmentsComponent,AboutComponent, NavbarComponent, FooterComponent, ContactComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Community-Apartments';
}
