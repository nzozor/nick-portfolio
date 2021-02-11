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

      assetRef: '../../../assets/images/relationship.svg',
      title: 'Professional Relationship',
      description: 'Before we start, I want to hear about you and your brand. A memorable brand has a unique story to tell.'
    },
    {
      assetRef: '../../../assets/images/save-money.svg',
      title: 'Save money & time',
      description: 'As a solo entrepreneur, I reduce the costs of a full-service agency. I value working quickly, professionally with effective results.'
    },
    {
      assetRef: '../../../assets/images/support.svg',
      title: 'Ongoing Support',
      description: 'Once your brand is launched, I’ll be happy to provide advice and support on how to best apply and communicate your brand identity.'
    }
  ];
  ngOnInit(): void {
  }

}
