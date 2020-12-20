import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagramSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'benoldi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuBarOpen = !this.isMenuBarOpen;
  }

}
