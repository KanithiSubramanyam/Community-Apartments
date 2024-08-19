import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ContactComponent } from './contact/contact.component';
import { ApartmentDetailsComponent } from './apartments/apartment-details/apartment-details.component'; 
import { NotFoundComponent } from './Utilites/not-found/not-found.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path: 'apartments', component:ApartmentsComponent},
    {path : 'amenities', component : AmenitiesComponent},
    {path : 'contact', component : ContactComponent},
    {path: 'apartments/:name', component: ApartmentDetailsComponent },
    {path : '**', component : NotFoundComponent}
];
