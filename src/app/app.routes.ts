import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'amenities', component : AmenitiesComponent},
    {path : 'contact', component : ContactComponent},
    {path : '**', component : HomeComponent}
];
