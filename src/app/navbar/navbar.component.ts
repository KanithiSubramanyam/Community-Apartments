import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isScrolled = false;
  logo = 'assets/SGS-logo.png';
  offcanvasLogo = 'assets/SGS.png'

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 100;
    }  }
  
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      if (typeof window !== 'undefined') {
        this.isScrolled = window.scrollY > 100;
      }
    }
}
