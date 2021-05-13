import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../shared/models/service-item';

@Component({
  selector: 'benoldi-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }
  imgUrl = '../../../assets/images/elsa-benoldi-graphic-design-studio.jpg';

  imgWorkUrl = '../../../assets/images/elsa-benoldi-graphic-design-work.jpg';

  items: ServiceItem[] = [
    {
      title: 'Brand Identity',
      description: 'From a logo to a complete brand style guide, I build identities that incorporate the voice,values, vision and personality of a business.'
    },
    {
      title: 'Print Design',
      description: 'I create beautifully designed books, cataloguesand packaging. I’m constantly lookingfor the newest materials and best suppliers.'
    },
    {
      title: 'Digital Design',
      description: 'With experience in UX/UI, I design and develop functional and visually impressive websites and mobile apps.'
    }
  ];
  ngOnInit(): void {
  }

}
