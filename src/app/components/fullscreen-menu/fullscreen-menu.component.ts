import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faFacebookF, faInstagramSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'benoldi-fullscreen-menu',
  templateUrl: './fullscreen-menu.component.html',
  styleUrls: ['./fullscreen-menu.component.scss']
})
export class FullscreenMenuComponent implements OnInit {
  @Output() menuBarToggle: EventEmitter<boolean> = new EventEmitter();
  @Input() isMenuBarOpen: boolean = false;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagramSquare = faInstagramSquare;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuBarToggle.emit();
  }
}
