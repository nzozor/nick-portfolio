import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'benoldi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagramSquare = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
