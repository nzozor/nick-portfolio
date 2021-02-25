import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thumbnail } from 'src/app/shared/models/project';

@Component({
  selector: 'benoldi-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
  @Input() thumbnails: Thumbnail[];
  @Input() loading: string;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
