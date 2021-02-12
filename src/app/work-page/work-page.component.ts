import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'benoldi-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  constructor() { }
  projects = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  ngOnInit(): void {

  }

}
