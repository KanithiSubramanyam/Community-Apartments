import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolled = false;

  ngOnInit() {
    // Initialize isScrolled based on the current scroll position
    this.isScrolled = window.scrollY > 100;
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 100 || window.pageYOffset > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
