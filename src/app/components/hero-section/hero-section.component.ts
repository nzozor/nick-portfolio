import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'benoldi-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  @Input() initials = true;
  constructor() { }

  ngOnInit(): void {
  }

}
