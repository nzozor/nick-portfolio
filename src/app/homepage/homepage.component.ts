import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thumbnail } from '../shared/models/project';
import { ServiceItem } from '../shared/models/service-item';
import { DataService } from '../shared/services/data.service';

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
      description: 'With experience in UX/UI, I design and develop functional and visually impressive websites and mobile apps.'
    }
  ];
  thumbnails$: Observable<Thumbnail[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.thumbnails$ = this.dataService.fetchThumbnailsHomePage();
  }
}
