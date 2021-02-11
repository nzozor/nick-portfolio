import { Component, Input, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/models/service-item';

@Component({
  selector: 'benoldi-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() items: ServiceItem[];
  constructor() { }
  ngOnInit(): void {

  }

}
