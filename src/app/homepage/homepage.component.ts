import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../shared/models/service-item';

@Component({
  selector: 'benoldi-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class homepageComponent implements OnInit {
  items: ServiceItem[] = [
    {
      assetRef: '../../../assets/images/brand-identity.svg',
      title: 'Brand Identity',
      description: 'From a logo to a complete brand style guide, I build identities that incorporate the personality of a business.'
    },
    {
      assetRef: '../../../assets/images/print-design.svg',
      title: 'Print Design',
      description: 'I create beautifully designed books, catalogues and packaging using the finest paper stocks and finishes.'
    },
    {
      assetRef: '../../../assets/images/digital-design.svg',
      title: 'Digital Design',
      description: 'With experience in UX/UX, I design and develop functional and visually impressive websites and mobile apps.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
