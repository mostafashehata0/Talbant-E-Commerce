import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarVisable: boolean = false;
  // cond: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateNavVisability();
  }

  constructor() {}

  ngOnInit(): void {
    this.updateNavVisability();
  }

  navToggle() {
    this.navbarVisable = !this.navbarVisable;
  }

  updateNavVisability(): void {
    this.navbarVisable = window.innerWidth < 1000;
  }
}
