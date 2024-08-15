import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path: 'apartments', component:ApartmentsComponent},
    {path : 'amenities', component : AmenitiesComponent},
    {path : 'contact', component : ContactComponent},
    {path : '**', component : HomeComponent}
];
