import { Component, Input } from '@angular/core';

@Component({
  selector: 'breadcrum',
  standalone: true,
  imports: [],
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.css'
})
export class BreadcrumComponent {
  aboutUsBreadcome = "assets/aboutUsBreadcome.jpg";
  @Input()
  breadcrumData : {
    title:string,
    subtitle:string
  };
}
