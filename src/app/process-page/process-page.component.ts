import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'benoldi-process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.scss']
})
export class ProcessPageComponent implements OnInit {
  imgProcessUrl = '../../assets/images/process/elsa-benoldi-graphic-design-magazine.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
