import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'benoldi-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
  @Input() numberOfProjects: number;
  constructor() { }
  projects: null[];

  ngOnInit(): void {
    if(this.numberOfProjects) {
      this.projects = new Array(this.numberOfProjects);
    } else {
      this.projects = new Array(9);
    }
  }

}
