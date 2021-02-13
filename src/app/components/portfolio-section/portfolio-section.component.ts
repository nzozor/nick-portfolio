import { Component, Input, OnInit } from '@angular/core';
import { Thumbnail } from 'src/app/shared/models/project';

@Component({
  selector: 'benoldi-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
  @Input() thumbnails: Thumbnail[];

  constructor() { }

  ngOnInit(): void {

  }

}
