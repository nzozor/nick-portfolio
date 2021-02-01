import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'benoldi-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {

  constructor() { }
  projects = [0, 1, 2, 3, 4, 5];

  ngOnInit(): void {
  }

}
