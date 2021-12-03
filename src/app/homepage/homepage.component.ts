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
      title: 'Website design and development',
      description: ''
    },
    {
      assetRef: '../../../assets/images/print-design.svg',
      title: 'Desktop and mobile app applications',
      description: ''
    },
    {
      assetRef: '../../../assets/images/digital-design.svg',
      title: 'Web marketing strategy',
      description: ''
    }
  ];
  thumbnails$: Observable<Thumbnail[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.thumbnails$ = this.dataService.fetchThumbnailsHomePage();
  }
}
